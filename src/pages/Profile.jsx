import { useState, useEffect } from "react";
import { Mail, LogOut, Lock, Pencil } from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import {
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase.js";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function displayLabelFromUser(user) {
  if (!user) return "";
  const dn = user.displayName?.trim();
  if (dn) return dn;
  return "User"
}

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [editNameValue, setEditNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameSuccess, setNameSuccess] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);

  useEffect(() => {
    if (!user) return;
    const label = displayLabelFromUser(user);
    setName(label);
    setEditNameValue(label);
  }, [user?.uid, user?.displayName, user?.email]);

  const handleSaveName = async () => {
    const trimmed = editNameValue.trim();
    if (!trimmed) {
      setNameError("Name cannot be empty.");
      return;
    }
    if (!auth.currentUser) {
      setNameError("Not signed in.");
      return;
    }
    setNameError("");
    setNameSuccess("");
    setSavingName(true);
    try {
      await updateProfile(auth.currentUser, { displayName: trimmed });
      setName(trimmed);
      setIsEditingName(false);
      setNameSuccess("Name updated!");
      setTimeout(() => setNameSuccess(""), 3000);
    } catch (err) {
      console.error(err);
      setNameError(err?.message || "Could not update name.");
    } finally {
      setSavingName(false);
    }
  };

  const handleCancelEditName = () => {
    setEditNameValue(name);
    setIsEditingName(false);
    setNameError("");
  };

  const handleUpdatePassword = async () => {
    setPasswordError("");
    setPasswordSuccess("");
    if (!oldPassword || !newPassword) {
      setPasswordError("Please fill in both fields.");
      return;
    }
    if (!PASSWORD_REGEX.test(newPassword)) {
      setPasswordError(
        "New password must be at least 8 characters and include letters and numbers.",
      );
      return;
    }
    if (!user?.email || !auth.currentUser) {
      setPasswordError("Not signed in.");
      return;
    }

    setUpdatingPassword(true);
    try {
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updatePassword(auth.currentUser, newPassword);
      setPasswordSuccess("Password updated successfully.");
      setOldPassword("");
      setNewPassword("");
      setTimeout(() => setPasswordSuccess(""), 4000);
    } catch (err) {
      console.error(err);
      const code = err?.code ?? "";
      if (code === "auth/wrong-password" || code === "auth/invalid-credential") {
        setPasswordError("Current password is incorrect.");
      } else if (code === "auth/weak-password") {
        setPasswordError("New password is too weak.");
      } else if (code === "auth/requires-recent-login") {
        setPasswordError("Please sign out and sign in again, then try changing your password.");
      } else {
        setPasswordError(err?.message || "Could not update password.");
      }
    } finally {
      setUpdatingPassword(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-gray-600 text-sm">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#FFF0E0] border-t-[#FF7A00]" />
            Loading profile…
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-8 pb-20">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 font-extrabold">Profile Settings</h1>
          <p className="text-gray-600">Manage your account</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl mb-4 font-bold">Personal Information</h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Full Name</label>
                <div className="flex items-center gap-3 flex-wrap">
                  {isEditingName ? (
                    <>
                      <Input
                        value={editNameValue}
                        onChange={(e) => setEditNameValue(e.target.value)}
                        className="flex-1 min-w-[200px] h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                        autoFocus
                      />
                      <Button
                        type="button"
                        onClick={handleSaveName}
                        disabled={savingName}
                        className="h-12 px-4 rounded-xl bg-[#FF7A00] hover:bg-[#E66D00] text-white font-bold disabled:opacity-60"
                      >
                        {savingName ? "Saving…" : "Save"}
                      </Button>
                      <Button
                        type="button"
                        onClick={handleCancelEditName}
                        disabled={savingName}
                        className="h-12 px-4 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold"
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="text-lg font-semibold">{name}</span>
                      <Button
                        type="button"
                        onClick={() => {
                          setEditNameValue(name);
                          setNameError("");
                          setIsEditingName(true);
                        }}
                        className="h-9 w-9 rounded-lg bg-transparent hover:bg-[#FFF9F5]"
                      >
                        <Pencil className="w-4 h-4 text-[#FF7A00]" />
                      </Button>
                    </>
                  )}
                </div>
                {nameError && <p className="text-red-600 text-sm mt-1">{nameError}</p>}
                {nameSuccess && <p className="text-green-600 text-sm mt-1">{nameSuccess}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    value={user.email ?? ""}
                    readOnly
                    className="pl-12 h-12 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-600"
                  />
                </div>
                <p className="text-xs text-gray-500">Email cannot be changed here.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-[#FF7A00]" />
              <h2 className="text-xl font-bold">Change Password</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Current Password</label>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                    setPasswordError("");
                  }}
                  autoComplete="current-password"
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">New Password</label>
                <Input
                  type="password"
                  placeholder="At least 8 characters, letters and numbers"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setPasswordError("");
                  }}
                  autoComplete="new-password"
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
              <Button
                type="button"
                onClick={handleUpdatePassword}
                disabled={updatingPassword}
                className="h-12 px-6 rounded-xl bg-[#FF7A00] hover:bg-[#E66D00] text-white font-bold disabled:opacity-60"
              >
                {updatingPassword ? "Updating…" : "Update Password"}
              </Button>
              {passwordError && (
                <p className="text-red-600 text-sm mt-2">{passwordError}</p>
              )}
              {passwordSuccess && (
                <p className="text-green-600 text-sm mt-2">{passwordSuccess}</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl mb-4 font-bold">Account</h2>
            <Button
              type="button"
              className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700 gap-2 font-semibold"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

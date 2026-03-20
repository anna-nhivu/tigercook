import { useState } from "react";
import { Mail, LogOut, Lock, Pencil } from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const userData = JSON.parse(
    window.localStorage.getItem("UserInformation") || '{"name":"John Doe","email":"john.doe@college.edu"}'
  );
  const navigate = useNavigate();
  const [name, setName] = useState(userData.name || "John Doe");
  const [isEditingName, setIsEditingName] = useState(false);
  const [editNameValue, setEditNameValue] = useState(name);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const handleSaveName = () => {
    if (editNameValue.trim()) {
      setName(editNameValue.trim());
      setIsEditingName(false);
    }
  };

  const handleCancelEditName = () => {
    setEditNameValue(name);
    setIsEditingName(false);
  };

  const handleUpdatePassword = () => {
    setPasswordError("");
    setPasswordSuccess("");
    if (!oldPassword || !newPassword) {
      setPasswordError("Please fill in both fields");
      return;
    }
    setPasswordSuccess("Password updated successfully!");
    setOldPassword("");
    setNewPassword("");
  };

  const handleLogout = () => {
    window.localStorage.removeItem("UserInformation");
    navigate("/login");
  };

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
                <div className="flex items-center gap-3">
                  {isEditingName ? (
                    <>
                      <Input
                        value={editNameValue}
                        onChange={(e) => setEditNameValue(e.target.value)}
                        className="flex-1 h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                        autoFocus
                      />
                      <Button
                        onClick={handleSaveName}
                        className="h-12 px-4 rounded-xl bg-[#FF7A00] hover:bg-[#E66D00] text-white font-bold"
                      >
                        Save
                      </Button>
                      <Button
                        onClick={handleCancelEditName}
                        className="h-12 px-4 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold"
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="text-lg font-semibold">{name}</span>
                      <Button
                        onClick={() => {
                          setEditNameValue(name);
                          setIsEditingName(true);
                        }}
                        className="h-9 w-9 rounded-lg bg-transparent hover:bg-[#FFF9F5]"
                      >
                        <Pencil className="w-4 h-4 text-[#FF7A00]" />
                      </Button>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    value={userData.email || "john.doe@college.edu"}
                    readOnly
                    className="pl-12 h-12 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-600"
                  />
                </div>
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
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">New Password</label>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setPasswordError("");
                  }}
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
              <Button
                onClick={handleUpdatePassword}
                className="h-12 px-6 rounded-xl bg-[#FF7A00] hover:bg-[#E66D00] text-white font-bold"
              >
                Update Password
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

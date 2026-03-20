import { useState } from "react";
import { Mail, LogOut, Lock, Pencil } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [isEditingName, setIsEditingName] = useState(false);
  const [editNameValue, setEditNameValue] = useState(name);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-8 pb-20">
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 800 }}>Profile Settings</h1>
          <p className="text-gray-600">Manage your account</p>
        </div>

        <div className="space-y-6">
          {/* Personal Information Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl mb-4" style={{ fontWeight: 700 }}>Personal Information</h2>
            
            <div className="space-y-4">
              {/* Name with inline edit button */}
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
                        className="h-12 px-4 rounded-xl bg-[#FF7A00] hover:bg-[#E66D00] text-white"
                        style={{ fontWeight: 700 }}
                      >
                        Save
                      </Button>
                      <Button 
                        onClick={handleCancelEditName}
                        className="h-12 px-4 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
                        style={{ fontWeight: 600 }}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="text-lg" style={{ fontWeight: 600 }}>{name}</span>
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

              {/* Email - read only */}
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    value="john.doe@college.edu"
                    readOnly
                    className="pl-12 h-12 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Change Password Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-[#FF7A00]" />
              <h2 className="text-xl" style={{ fontWeight: 700 }}>Change Password</h2>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Current Password</label>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">New Password</label>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
              <Button 
                className="h-12 px-6 rounded-xl bg-[#FF7A00] hover:bg-[#E66D00] text-white"
                style={{ fontWeight: 700 }}
              >
                Update Password
              </Button>
            </div>
          </div>

          {/* Account Actions - Log Out only */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl mb-4" style={{ fontWeight: 700 }}>Account</h2>
            <Button 
              className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700 gap-2"
              style={{ fontWeight: 600 }}
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

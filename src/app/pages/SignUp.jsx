import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Mail, Lock, ChefHat, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Footer } from "../components/Footer";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    navigate("/generator");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFB84D] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#7ED957] rounded-full opacity-20 blur-3xl"></div>
      
      <div className="w-full max-w-md">
        {/* Sign up form */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-[#FF7A00] to-[#FFB84D] p-4 rounded-2xl">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl text-center mb-2" style={{ fontWeight: 800 }}>TigerCook</h1>
          <p className="text-center text-gray-600 mb-6">Create your account to start cooking</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="your.email@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
                />
              </div>
            </div>

            <Button 
              onClick={handleSignUp}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FFB84D] hover:from-[#E66D00] hover:to-[#FFA73D] text-white" 
              style={{ fontWeight: 700 }}
            >
              Sign up
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <Link to="/generator">
              <Button 
                className="w-full h-12 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700" 
                style={{ fontWeight: 600 }}
              >
                Go to Generator
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

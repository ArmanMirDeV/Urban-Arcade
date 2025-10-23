import React, { useState, useContext } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const [show, setShow] = useState(false);
  const { createUser, setUser, handleGoogle } = useContext(AuthContext);

  // 🔹 Register new user
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const strongRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!strongRegEx.test(password)) {
      toast.error(
        "Password must include an uppercase letter, number, and special symbol ⚡"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Account Created Successfully 🎮");
            form.reset();
          })
          .catch((error) =>
            toast.error("Failed to update profile: " + error.message)
          );
      })
      .catch((error) => toast.error(error.message));
  };

  // 🔹 Google Sign-In
  const handleGoogleSignIn = () => {
    handleGoogle()
      .then(() => toast.success("Signed in with Google ⚡"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden text-white rounded-2xl">
      {/* Neon glowing background orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Registration Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_25px_rgba(147,51,234,0.5)] p-8">
        <h1 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Create Your Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Gamer Name"
              className="input input-bordered w-full bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              required
              type="text"
              name="photo"
              placeholder="https://example.com/avatar.png"
              className="input input-bordered w-full bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input input-bordered w-full bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className=" relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              required
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <span
              
              onClick={() => setShow(!show)}
              className="absolute  right-[10px] top-[36px] cursor-pointer"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 mt-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 font-bold text-white shadow-[0_0_15px_#e100ff] transition duration-300"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-4">
            <div className="h-px w-20 bg-white/30"></div>
            <span className="text-sm text-white/70">or</span>
            <div className="h-px w-20 bg-white/30"></div>
          </div>

          {/* Google Sign-In */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-white/80 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-300 hover:text-white underline font-semibold"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;

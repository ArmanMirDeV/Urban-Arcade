import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { FaUserEdit } from "react-icons/fa";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    if (!user) {
      toast.error("No user logged in!");
      return;
    }

    setLoading(true);
    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully");
        navigate("/my-profile");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden rounded-xl text-white">
      {/* Neon glow background */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_25px_rgba(147,51,234,0.5)] p-8">
        <div className="flex flex-col items-center gap-3 mb-6">
          <FaUserEdit className="text-4xl text-pink-400 drop-shadow-[0_0_10px_#e100ff]" />
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Update Your Profile
          </h2>
          <p className="text-sm text-gray-300">
            Customize your arcade identity 👾
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Name input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Display Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              placeholder="Enter new display name"
              className="input input-bordered w-full bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Photo URL input */}
          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={user?.photoURL || ""}
              placeholder="Enter new photo URL"
              className="input input-bordered w-full bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-4 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 font-bold text-white transition duration-300 shadow-[0_0_15px_#e100ff]"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>

        <div className="text-center mt-5">
          <Link
            to="/my-profile"
            className="text-pink-300 hover:text-white underline text-sm"
          >
            Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

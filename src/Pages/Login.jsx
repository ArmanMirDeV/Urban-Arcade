import React, { useRef, useState, use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const { user, signIn, logOut, handleGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  //  Handle Email Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Welcome back, gamer! ");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => toast.error(err.message));
  };

  //  Handle Google Login
 const handleGoogleSignIn = () => {
   handleGoogle().then((result) => {
       const user = result.user;
       console.log(user);

       navigate(`${location.state ? location.state : "/"}`);
       toast.success("Sign in Successful");
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       toast.error(errorMessage, errorCode);
     });
 };

  //  Handle Logout
  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully "))
      .catch((err) => toast.error(err.message));
  };

  //  Handle Forget Password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    navigate("/forget-pass", { state: { email } });
  };

  return (
    <div className="min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden text-white rounded-2xl">
      {/* Neon Orbs Background */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_25px_rgba(147,51,234,0.5)] p-8 text-center">
        {/* If user logged in */}
        {user ? (
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Welcome, {user.displayName || "Player"}!
            </h2>
            <img
              src={
                user.photoURL ||
                "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt="User Avatar"
              className="w-32 h-32 mx-auto rounded-full border-4 border-purple-500 shadow-[0_0_20px_#e100ff]"
            />
            <p className="text-gray-300 mt-3">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-5 w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 font-bold text-white shadow-[0_0_15px_#e100ff] transition duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Login to Continue
            </h2>

            <form onSubmit={handleLogin} className="space-y-5 text-left">
              {/* Email */}
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="gamer@email.com"
                  className="w-full input input-bordered bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="w-full input input-bordered bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[10px] top-[36px] cursor-pointer"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Forget Password */}
              <button
                type="button"
                onClick={handleForgetPassword}
                className="text-sm text-pink-300 hover:text-white underline"
              >
                Forgot Password?
              </button>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-2 mt-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 font-bold text-white shadow-[0_0_15px_#e100ff] transition duration-300"
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-5">
              <div className="h-px w-20 bg-white/30"></div>
              <span className="text-sm text-white/70">or</span>
              <div className="h-px w-20 bg-white/30"></div>
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-white/80 mt-4">
              New to the arcade?{" "}
              <Link
                to="/registration"
                className="text-pink-300 hover:text-white underline font-semibold"
              >
                Register
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

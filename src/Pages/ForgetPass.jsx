import React, { use, useEffect, useRef } from "react";
import MyContainer from "../Components/MyContainer";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPass = () => {
  const location = useLocation();
  const emailRef = useRef(null); 
  const { resetPassword } = use(AuthContext);

  useEffect(() => {
    if (location.state?.email && emailRef.current) {
      emailRef.current.value = location.state.email; 
    }
  }, [location.state]);

    const handleReset = async (e) => {
       e.preventDefault();
    const email = emailRef.current.value;
    if (!email) return alert("Please enter your email!");
    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
      window.location.href = "https://mail.google.com/";
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="min-h-[calc(100vh-20px)]  flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 relative overflow-hidden rounded-xl">
        {/* Animated glow orbs */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <MyContainer>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
            {/* Left section */}
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="text-5xl font-extrabold drop-shadow-lg">
                Welcome
              </h1>
            </div>

            {/* Login card */}
            <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
              {/* User conditional rendering */}

              <form className="space-y-5">
                <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                  Reset Password
                </h2>

                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    // value={email}

                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button type="button" onClick={handleReset} className="my-btn">
                  Reset
                </button>

                <button
                  className="hover:underline cursor-pointer"
                  type="button"
                >
                  <Link to="/login">Log In</Link>
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                <p className="text-center text-sm text-white/80 mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/registration"
                    className="text-pink-300 hover:text-white underline"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default ForgetPass;

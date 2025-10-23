import { use, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import MyContainer from "../Components/MyContainer";

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
    const email = emailRef.current.value.trim();

    if (!email) {
      toast.warning("⚠️ Please enter your email address.");
      return;
    }

    try {
      await resetPassword(email);
      toast.success("✅ Password reset email sent!");
      window.location.href = "https://mail.google.com/";
    } catch (err) {
      toast.error(err.message || "❌ Failed to send reset email.");
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left Section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Forgot Your Password?
            </h1>
            <p className="text-white/80">
              No worries! Enter your registered email, and we’ll send you a
              password reset link.
            </p>
          </div>

          {/* Reset Card */}
          <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_25px_rgba(147,51,234,0.5)] rounded-2xl p-8">
            <form onSubmit={handleReset} className="space-y-5">
              <h2 className="text-2xl font-bold text-center text-white">
                Reset Password
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  className="w-full input input-bordered bg-white/10 text-white placeholder-white/60 border border-purple-500/30 focus:ring-2 focus:ring-pink-400 focus:outline-none rounded-md p-3"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-700 hover:to-pink-500 font-bold text-white shadow-[0_0_15px_#e100ff] transition duration-300"
              >
                Reset Password
              </button>

              {/* Login Link */}
              <div className="text-center mt-4">
                <p className="text-sm text-white/80">
                  Remembered your password?{" "}
                  <Link
                    to="/login"
                    className="text-pink-300 hover:text-white underline"
                  >
                    Log In
                  </Link>
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-3">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Register Link */}
              <p className="text-center text-sm text-white/80">
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
  );
};

export default ForgetPass;

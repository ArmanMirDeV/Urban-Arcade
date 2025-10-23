import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-[0_0_10px_rgba(147,51,234,0.3)]">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-black/30 backdrop-blur-lg border-t border-white/10">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

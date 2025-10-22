import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Pages/Loading';

const MainLayout = () => {

  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading />
  }

    return (
      <div className="bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200">
        <Navbar />
        <div className=" max-w-screen-xl mx-auto w-full px-4  md:px-8 lg:px-12 py-4  md:py-8 lg:py-12 flex-1 ">
          <Outlet />
        </div>

        <Footer />
      </div>
    );
};

export default MainLayout;
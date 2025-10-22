import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Floating gradient circles for background */}
      <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* 404 Number */}
      <h1 className="text-[8rem] md:text-[10rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600 drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-2">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-lg max-w-lg text-center mb-8 px-4">
        The page you’re looking for doesn’t exist or has been moved. Don’t worry
        — we’ll get you back on track!
      </p>

      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-purple-500/40"
      >
        Go Back
      </button>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.47-16.33 168.37-17.62 250.83-.39 57.8 12.24 114.24 32.55 172 41.86 82.18 13 168.57 8.68 250.78-10.88V120H0V97.35A600.21 600.21 0 00321.39 56.44z"
            fill="rgba(59,130,246,0.3)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default NotFound;

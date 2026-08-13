import { useNavigate } from "react-router";
import errorImage from "../../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <img
        src={errorImage}
        alt="404 Error"
        className="w-full max-w-md"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-[#0b1f38] mt-8">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 text-lg mt-3">
        The page you are looking for is not available.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
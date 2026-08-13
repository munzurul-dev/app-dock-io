import { useNavigate } from "react-router";
import errorImage from "../../assets/App-Error.png";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <img
        src={errorImage}
        alt="App Not Found"
        className="w-full max-w-md"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-[#0b1f38] mt-6">
        OPPS!! APP NOT FOUND
      </h1>

      <p className="text-gray-500 text-lg mt-3 max-w-3xl">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-3 rounded-lg transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default AppNotFound;
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import heroPng from "../../assets/hero.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="-mb-2">
      <div className=" max-w-5xl mx-auto  p-10 text-center space-y-3 md:space-y-6">
        <h1 className="md:text-6xl text-4xl  text-center font-semibold text-black">
          <span>We Build</span> <br />{" "}
          <span className="text-indigo-600">Productive</span> Apps
        </h1>
        <p className=" md:w-xl w-64 mx-auto text-center text-[#16141483] text-sm ">
          At <span className="text-indigo-600 font-bold">AppDock.io</span> we
          craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>
        <div className=" flex gap-4 items-center justify-center ">
          <Link to="https://play.google.com/store/games?hl=en" target="_blank">
            <button className="flex items-center gap-2 btn bg-white text-black border-indigo-600 rounded-2xl">
              <FaGooglePlay className="text-indigo-600"></FaGooglePlay>
              <span>Google Play</span>
            </button>
          </Link>
          <Link to="https://www.apple.com/app-store/" target="_blank">
            <button className="flex items-center gap-2 btn bg-white text-black border border-indigo-600 rounded-2xl">
              {" "}
              <FaAppStore className="text-indigo-600"></FaAppStore>
              <span>App Store</span>
            </button>
          </Link>
        </div>
      </div>
      <div className=" max-w-2xl mx-auto flex justify-center p-2">
        <img className="w-full" src={heroPng} alt="" />
      </div>
    </div>
  );
};

export default Banner;

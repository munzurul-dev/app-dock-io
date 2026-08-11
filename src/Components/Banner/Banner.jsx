import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import heroPng from '../../assets/hero.png'
const Banner = () => {
  return (
    <div className="-mb-2">
      <div className=" max-w-5xl mx-auto  p-10 text-center space-y-3 md:space-y-6">
        <h1 className="md:text-6xl text-4xl  text-center font-semibold text-black">
          <span>We Build</span> <br />{" "}
          <span className="text-indigo-600">Productive</span> Apps
        </h1>
        <p className=" md:w-xl w-64 mx-auto text-center  text-shadow-gray-600 text-sm ">
          At <span className="text-indigo-600 font-bold">AppDock.io</span> we
          craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>
        <div className=" flex gap-4 items-center justify-center ">
          <button className="flex items-center gap-2 btn text-black border border-indigo-500">
            <FaGooglePlay className="text-indigo-600"></FaGooglePlay>
            <span>Google Play</span>
          </button>
          <button className="flex items-center gap-2 btn text-black border border-indigo-500">
            {" "}
            <FaAppStore className="text-indigo-600"></FaAppStore>
            <span>App Store</span>
          </button>
        </div>
      </div>
     <div className=" max-w-2xl mx-auto flex justify-center p-2">
      <img className="w-full" src={heroPng} alt="" />
     </div>
    </div>
  );
};

export default Banner;

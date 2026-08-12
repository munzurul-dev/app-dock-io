import { IoMdTrendingUp } from "react-icons/io";
import TrendingAppCard from "../../Components/TrendingAppCard/TrendingAppCard";

const TrendingApps = ({trendingAppsData}) => {
  return (
    <div className="mt-10">
      <h2 className="text-black text-3xl text-center mb-2 font-bold flex gap-2 items-center justify-center">
        <span>Trending</span>
        <IoMdTrendingUp className="h-10 w-10 text-green-500" /> <span>Apps</span>
      </h2>
      <p className="text-gray-700 text-xs text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-4 md:p-8">
        {
          trendingAppsData.map(tAppData => <TrendingAppCard tAppData={tAppData} key={tAppData.id}></TrendingAppCard>)
        }
      </div>
      <div className="flex justify-center mt-2 md:-mt-2 ">
        <button onClick={() => (window.location.href = "/apps")} className="text-white btn bg-indigo-600 border-0 py-2 mb-3  px-5">Show All</button>
      </div>
    </div>
  );
};

export default TrendingApps;

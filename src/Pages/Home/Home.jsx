import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import TrustedBanner from "../../Components/TrustedBanner/TrustedBanner";
import TrendingApps from "../TrendingApps/TrendingApps";

const Home = () => {
  const trendingAppsData = useLoaderData();
 
  return (
    <div>
      <Banner></Banner>
      <TrustedBanner></TrustedBanner>
      <TrendingApps trendingAppsData={trendingAppsData}></TrendingApps>
    </div>
  );
};

export default Home;

import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const TrendingAppCard = ({ tAppData }) => {
  console.log(tAppData);
  const { title, image, downloads, ratingAvg } = tAppData;
  return (
    <div className=" w-full bg-white rounded-2xl p-4">
      <img
        className="w-full rounded-2xl p-10 bg-gray-100"
        src={image}
        alt="image"
      />
      <h2 className="text-black text-md mt-2 mb-2">{title}</h2>
      <div className="flex justify-between items-center">
        <span className="flex items-center  text-green-400 bg-gray-100 p-1 rounded-md">
          <MdOutlineFileDownload />
          {downloads}
        </span>
        <span className="flex items-center gap-1 text-orange-500 bg-gray-100 p-1 rounded-md">
          {ratingAvg}
          <FaStarHalfAlt />
        </span>
      </div>
    </div>
  );
};

export default TrendingAppCard;

import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { getAppDataFLS } from "../../Utility/utility";
import AppNotFound from "../../Components/AppNotFound/AppNotFound";
import toast from "react-hot-toast";


const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const loadInstalledApps = async () => {
      const res = await fetch("/apps.json");
      const apps = await res.json();

      const savedIds = getAppDataFLS();

      const matchedApps = savedIds
        .map((id) => apps.find((app) => app.id === id))
        .filter(Boolean);

      setInstalledApps(matchedApps);
    };

    loadInstalledApps();
  }, []);

  const convertDownloads = (downloads) => {
    const value = parseFloat(downloads);
    const text = String(downloads).toLowerCase();

    if (text.includes("b")) return value * 1000000000;
    if (text.includes("m")) return value * 1000000;
    if (text.includes("k")) return value * 1000;

    return value;
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "downloads-high") {
      return convertDownloads(b.downloads) - convertDownloads(a.downloads);
    }

    if (sortOrder === "downloads-low") {
      return convertDownloads(a.downloads) - convertDownloads(b.downloads);
    }

    if (sortOrder === "rating-high") {
      return Number(b.ratingAvg) - Number(a.ratingAvg);
    }

    if (sortOrder === "rating-low") {
      return Number(a.ratingAvg) - Number(b.ratingAvg);
    }

    return 0;
  });

  const handleUninstall = (id) => {
    const savedIds = getAppDataFLS();

    const updatedIds = savedIds.filter((appId) => appId !== id);

    localStorage.setItem("App", JSON.stringify(updatedIds));

    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
    toast.success("App uninstalled successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 min-h-[70vh]">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0b1f38]">
          Your Installed Apps
        </h1>

        <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-8 sm:mt-12 mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f38]">
          {installedApps.length} Apps Found
        </h2>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2.5 text-gray-600 outline-none bg-white"
        >
          <option value="">Sort By</option>
          <option value="downloads-high">Downloads: High to Low</option>
          <option value="downloads-low">Downloads: Low to High</option>
          <option value="rating-high">Rating: High to Low</option>
          <option value="rating-low">Rating: Low to High</option>
        </select>
      </div>

      {sortedApps.length > 0 ? (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg object-contain bg-gray-100"
                />

                <div className="min-w-0">
                  <h3 className="text-base sm:text-xl font-semibold text-[#0b1f38] truncate">
                    {app.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm">
                    <span className="flex items-center gap-1 text-green-500">
                      <FaDownload />
                      {app.downloads}
                    </span>

                    <span className="flex items-center gap-1 text-orange-500">
                      <FaStar />
                      {app.ratingAvg}
                    </span>

                    <span className="text-gray-500">{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="w-full sm:w-auto shrink-0 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      ) : (
        <AppNotFound />
      )}
    
    </div>
  );
};

export default Installation;

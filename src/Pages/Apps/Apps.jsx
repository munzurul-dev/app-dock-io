import { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import AppNotFound from "../../Components/AppNotFound/AppNotFound";

const Apps = () => {
  const appsData = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4">
      <div className="text-center mx-auto">
        <h2 className="text-2xl font-bold text-black mb-2">
          Our All Applications
        </h2>

        <p className="text-sm text-[#3333338f]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="md:flex justify-between items-center px-8 mt-8">
        <h3 className="font-bold text-black text-xl mb-2 md:mb-0">
          ({filteredApps.length}) Apps Found
        </h3>

        <input
          type="text"
          placeholder="Search Apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-white text-black rounded-lg px-4 py-3 w-80"
        />
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 md:p-8">
          {filteredApps.map((appData) => (
            <AppCard key={appData.id} appData={appData} />
          ))}
        </div>
      ) : <AppNotFound></AppNotFound>}
    </div>
  );
};

export default Apps;

import { useLoaderData } from "react-router";

const AppDetails = () => {
  const app = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 ">
        <div className="bg-white p-6 rounded-2xl">
          <img
            src={app.image}
            alt={app.title}
            className="w-full aspect-square object-contain rounded-xl bg-gray-100"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-[#0b1f38]">{app.title}</h1>

          <p className="text-gray-500 mt-2">
            Developed by{" "}
            <span className="text-purple-600 font-semibold">
              {app.companyName}
            </span>
          </p>

          <div className="border-t border-gray-300 my-6" />

          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-green-500 text-3xl">↓</div>
              <p className="text-gray-500 text-sm">Downloads</p>
              <h2 className="text-3xl font-bold">{app.downloads}</h2>
            </div>

            <div>
              <div className="text-orange-500 text-3xl">★</div>
              <p className="text-gray-500 text-sm">Average Ratings</p>
              <h2 className="text-3xl font-bold">{app.ratingAvg}</h2>
            </div>

            <div>
              <div className="text-purple-500 text-3xl">♧</div>
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <h2 className="text-3xl font-bold">{app.reviews}</h2>
            </div>
          </div>

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg">
            Install Now ({app.size})
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-8">
  <h2 className="text-xl font-bold mb-5">Ratings</h2>

  <div className="space-y-4">
    {Object.entries(app.ratings).map(([star, count]) => {
      const maxRating = Math.max(...Object.values(app.ratings));
      const width = (count / maxRating) * 100;

      return (
        <div
          key={star}
          className="grid grid-cols-[45px_1fr] items-center gap-3"
        >
          <span className="text-gray-500">{star} star</span>

          <div className="h-6">
            <div
              className="h-full bg-orange-500"
              style={{ width: `${width}%` }}
            />
          </div>
        </div>
      );
    })}
  </div>
</div>

      <div className="border-t border-gray-300 mt-8 pt-8">
        <h2 className="text-xl font-bold mb-5">Description</h2>

        <div className="space-y-6 text-gray-500 leading-7">
          {app.description}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;

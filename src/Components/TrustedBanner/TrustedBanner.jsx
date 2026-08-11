const TrustedBanner = () => {
  return (
    <div className=" max-w-full mt-0 bg-linear-to-r from-indigo-500 to-violet-600 text-white px-5 py-2 md:px-18 md:py-10">
      <h2 className="md:text-2xl text-xl font-semibold text-center mb-5 md:mb-10">
        Trusted by Millions, Built for You
      </h2>
      <div className="flex justify-center gap-8 text-center">
        <div className="">
          <p className="text-xs text-gray-100">Total Downloads</p>
          <h3 className="md:text-4xl text-3xl font-bold">29.6M</h3>
          <p className="text-xs text-gray-100">21% more than last month</p>
        </div>
        <div className="">
          <p className="text-xs text-gray-100">Total Reviews</p>
          <h3 className="text-4xl font-bold" >906K</h3>
          <p className="text-xs text-gray-100">46% more than last month</p>
        </div>
        <div className="">
          <p className="text-xs text-gray-100">Active Apps</p>
          <h3 className="text-4xl font-bold">132+</h3>
          <p className="text-xs text-gray-100">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBanner;

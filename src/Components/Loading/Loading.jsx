const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-purple-100"></div>

        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 border-r-purple-500 animate-spin"></div>

        <div className="absolute inset-4 rounded-full bg-white shadow-md flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
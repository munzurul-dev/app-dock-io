const Logo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30">
        <div className="grid grid-cols-2 gap-1">
          <span className="h-2.5 w-2.5 rounded-sm bg-white" />
          <span className="h-2.5 w-2.5 rounded-sm bg-white/70" />
          <span className="h-2.5 w-2.5 rounded-sm bg-white/70" />
          <span className="h-2.5 w-2.5 rounded-sm bg-white" />
        </div>
      </div>

      <h1 className="text-2xl font-extrabold tracking-tight">
        <span className="text-slate-900 dark:text-white">App</span>
        <span className="bg-linear-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
          Dock
        </span>
        <span className="text-sm font-bold text-indigo-500">.io</span>
      </h1>
    </div>
  );
};

export default Logo;

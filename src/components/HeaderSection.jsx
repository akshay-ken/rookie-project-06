export function HeaderSection() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold text-Gray-950-Text">
          Social Media Dashboard
        </h1>
        <h2 className="text-base font-semibold font-stretch-200% text-Gray-650-Text">
          Total Followers: 23,004
        </h2>
      </div>
      <hr className="md:hidden my-4" />
      <div className="flex flex-row justify-between md:items-start items-center">
        <p className="text-base font-semibold text-Gray-650-Text">Dark Mode</p>
        {/* custom toggle switch */}
        <label className="relative cursor-pointer w-16 h-8 bg-gray-300 rounded-full">
          <input type="checkbox" className="sr-only peer" value="" />

          <div className="w-6 absolute top-1 left-1 h-6 rounded-full transition-all bg-white peer-checked:translate-x-8"></div>
        </label>
      </div>
    </header>
  );
}

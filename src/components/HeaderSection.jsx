export function HeaderSection() {
  return (
    <header className="flex flex-col md:flex-row">
      <div>
        <h1 className="text-2xl font-bold text-Gray-950-Text">
          Social Media Dashboard
        </h1>
        <h2 className="text-base font-semibold font-stretch-200% text-Gray-650-Text">
          Total Followers: 23,004
        </h2>
      </div>
      <div>
        <p>Dark Mode</p>
        <label htmlFor=""></label>
      </div>
    </header>
  );
}

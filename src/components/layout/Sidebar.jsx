const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4 text-xl font-bold">
        BugFixer
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Dashboard
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Issues
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

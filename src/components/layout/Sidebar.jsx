const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white hidden md:block">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6">BugFixer</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block p-2 hover:bg-gray-800 rounded">
            Dashboard
          </a>
          <a href="#" className="block p-2 hover:bg-gray-800 rounded">
            Issues
          </a>
          <a href="#" className="block p-2 hover:bg-gray-800 rounded">
            Analytics
          </a>
          <a href="#" className="block p-2 hover:bg-gray-800 rounded">
            Settings
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
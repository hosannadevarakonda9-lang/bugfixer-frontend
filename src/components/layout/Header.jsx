const Header = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-end px-6">
      <span className="mr-4 text-gray-700">
        John Doe
      </span>
      <button className="px-4 py-2 bg-gray-800 text-white rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="min-h-screen flex">
      {isAuthenticated && <Sidebar />}
      
      <div className="flex-1 flex flex-col">
        {isAuthenticated && <Header />}
        
        <main className="flex-1 p-4 md:p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
import { NavLink, useNavigate } from "react-router-dom";
import { User, Activity, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    // Listen to login or navbar change events
    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("user-login", handleUserChange);
    window.addEventListener("user-change", handleUserChange); // after registration

    return () => {
      window.removeEventListener("user-login", handleUserChange);
      window.removeEventListener("user-change", handleUserChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);

    // Trigger Navbar update
    window.dispatchEvent(new Event("user-login"));

    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center shadow-lg animate-float">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
            Medi<span className="text-primary">Care</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "Doctors", path: "/doctors" },
            { label: "Blog", path: "/blog" },
            { label: "Appointment", path: "/appointment" },
            { label: "Contact", path: "/contact" },
            { label: "FAQ", path: "/faq" }
          ].map(link => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary hover:scale-105"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          {user ? (
            <>
              <span className="text-gray-700 dark:text-gray-200 font-semibold">
                Hi, {user.name.split(" ")[0]}
              </span>

              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-1"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform shadow-sm hover:shadow-md"
              >
                <User size={16} /> Login
              </NavLink>

              {/* Register button will hide after registration via "user-change" event */}
              {!localStorage.getItem("justRegistered") && (
                <NavLink
                  to="/register"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Register
                </NavLink>
              )}
            </>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;

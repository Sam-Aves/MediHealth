import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "winter" ? "night" : "winter")}
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
      title="Toggle Theme"
    >
      {theme === "winter" ? (
        <Moon className="text-gray-800 dark:text-yellow-400 w-5 h-5 animate-bounce" />
      ) : (
        <Sun className="text-yellow-400 w-5 h-5 animate-spin-slow" />
      )}
    </button>
  );
};

export default ThemeToggle;

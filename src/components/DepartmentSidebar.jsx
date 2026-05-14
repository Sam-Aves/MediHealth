import React from "react";

const DepartmentSidebar = ({ departments, activeId, onSelect }) => {
  return (
    <aside className="w-full md:w-72 space-y-4 sticky top-24">
      <h3 className="text-sm font-bold text-base-content/60 uppercase mb-4">
        Departments
      </h3>

      {departments.map((dep) => {
        const Icon = dep.icon;
        return (
          <button
            key={dep.id}
            onClick={() => onSelect(dep.id)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300
              ${
                activeId === dep.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                  : "hover:bg-base-200"
              }`}
          >
            {Icon && <Icon className={`text-xl ${activeId === dep.id ? "text-white" : "text-base-content"}`} />}
            <span className="font-medium">{dep.name}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default DepartmentSidebar;

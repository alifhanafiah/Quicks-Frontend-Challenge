import { useState } from "react";
import DropdownIcon from "../assets/icons/expand_more.svg";

const TaskBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between md:pl-20">
      {/* Dropdown */}
      <div className="relative rounded-[0.3125rem] border border-primary-gray-500 px-4 py-2">
        <button
          onClick={toggleDropdown}
          className="flex items-center font-bold text-primary-gray-400 hover:text-gray-900 focus:outline-none"
        >
          My Tasks
          <div className="ml-2">
            <img src={DropdownIcon} alt="Dropdown Icon" />
          </div>
        </button>

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <div className="absolute right-4 top-12 z-10 rounded-md bg-white py-2 shadow-md">
            {/* Dropdown Options */}
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Option 3
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Blue Button */}
      <button className="rounded-md bg-primary-blue px-4 py-2 text-white hover:bg-blue-400 focus:outline-none">
        New Task
      </button>
    </div>
  );
};

export default TaskBar;

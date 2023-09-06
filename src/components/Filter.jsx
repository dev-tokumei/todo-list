import React, { useState } from "react";

const Filter = ({ showAllTasks, showCompletedTasks, showIncompleteTasks }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between text-white w-[150px] h-[40px] bg-gray-800 p-2 rounded-md  hover:bg-gray-700 transition-colors duration-300 ease-in-out"
        onClick={() => setShow(!show)}
      >
        Filter
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div className="relative  ">
        {show && (
          <div className="w-[150px] bg-gray-800 mt-1 absolute z-20 rounded-sm">
            <ul className="cursor-pointer ">
              <li className="text-white py-2 px-2 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                <button
                  className="w-full text-start cursor-pointer"
                  onClick={() => showAllTasks("all")}
                >
                  Все
                </button>
              </li>
              <li className="text-white py-2 px-2 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                <button
                  className="w-full text-start cursor-pointer"
                  onClick={() => showCompletedTasks("completed")}
                >
                  Выполнение
                </button>
              </li>
              <li className="text-white py-2 px-2 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                <button
                  className="w-full text-start cursor-pointer"
                  onClick={() => showIncompleteTasks("incompleted")}
                >
                  Не выполниене
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;

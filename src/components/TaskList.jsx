import React from "react";
import { BsCheck, BsClock } from "react-icons/bs";
import Check from "./ui/Check";
import { MdOutlineDeleteForever } from "react-icons/md/index";
import { FiEdit } from "react-icons/fi";

const TaskList = ({ todo, changeTask, removeTask, editTask }) => {
  return (
    <div className="w-[350px] bg-gray-800 mt-3 p-5 rounded-md hover:translate-y-[-2px] hover:shadow-md hover:shadow-slate-700 ease-in-out duration-300 cursor-pointer">
      <div className="flex item-center justify-between">
        <button
          className="border-pink-400 border-2 w-[32px] h-[27px] flex justify-center items-center rounded-full cursor-pointer"
          onClick={() => changeTask(todo.id)}
        >
          <Check isComleted={todo.completed} />
        </button>
        <div className="w-full pl-4  flex justify-start">
          <h1 className="text-white font-bold text-lg mr-2">{todo.title}</h1>
        </div>
        <button onClick={() => editTask(todo.id)}>
          <FiEdit
            size={24}
            className="text-gray-500 hover:text-yellow-400 transition-colors duration-300 ease-in-out"
          />
        </button>
        <button onClick={() => removeTask(todo.id)}>
          <MdOutlineDeleteForever
            size={30}
            className="text-gray-500 hover:text-red-500 transition-colors duration-300 ease-in-out"
          />
        </button>
      </div>
      <div className="w-full pt-2 flex flex-wrap">
        <p className="text-white w-full break-words text-ellipsis">
          {todo.description}
        </p>
      </div>
      <div className="flex items-center w-full justify-end ">
        <BsClock color="white" size={20} />
        <p className="pl-2 text-white">{}</p>
      </div>
    </div>
  );
};

export default TaskList;

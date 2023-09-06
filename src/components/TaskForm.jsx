import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";

const TaskForm = ({
  onAdd,
  newTask,
  setNewTask,
  edit,
  setEdit,
  previousTitle,
  previousDescription,
}) => {
  // const [newTask, setNewTask] = useState({
  //   title: "",
  //   description: "",
  //   id: "",
  //   complited: false,
  // });

  const handleAdd = () => {
    if (newTask.description === " " || newTask.title === "") {
      return alert("Пожалуйса заполните все формы");
    }
    onAdd(newTask);
    setNewTask({ title: "", description: "", complited: false });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <input
        className="w-[50%] mr-5 h-[45px] rounded-xl pl-3 bg-gray-700  border-2 border-solid] text-white"
        type="text"
        placeholder="Названия"
        value={newTask.title || previousTitle}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        onKeyDown={onKeyDown}
      />
      <input
        onKeyDown={onKeyDown}
        className="w-[50%] mr-5 h-[45px] rounded-xl pl-3 bg-gray-700  border-2 border-solid]  text-white"
        type="text"
        placeholder="Описания"
        value={newTask.description || previousDescription}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />

      <div className=" ">
        {edit ? (
          <button
            onClick={() => setEdit(!edit)}
            className="w-[50px] h-[50px] rounded-full bg-green-600 text-white flex justify-center items-center mr-5 hover:bg-green-500 transition-colors duration-300 ease-in-out"
          >
            <BsCheck size={35} />
          </button>
        ) : (
          <button
            onKeyDown={onKeyDown}
            onClick={handleAdd}
            className="w-[50px] h-[50px] rounded-full bg-green-600 text-white  flex justify-center items-center mr-5 hover:bg-green-500 transition-colors duration-300 ease-in-out"
          >
            <RiAddFill size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskForm;

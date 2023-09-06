import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (newTask) => {
    const add = [
      ...tasks,
      {
        ...newTask,
        id: Date.now(),
        complited: false,
        date: Date.now(),
      },
    ];
    setTasks(add);
    localStorage.setItem("tasks", JSON.stringify(add));
  };
  const changeTask = (id) => {
    const copy = [...tasks];
    const current = copy.find((t) => t.id === id);
    current.completed = !current.completed;
    setTasks(copy);
    localStorage.setItem("tasks", JSON.stringify(copy));
  };

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  const removeTask = (id) => {
    const remove = [...tasks.filter((t) => t.id != id)];
    setTasks(remove);
    localStorage.setItem("tasks", JSON.stringify(remove));
  };

  const showAllTasks = () => {
    setFilter("all");
  };

  const showCompletedTasks = () => {
    setFilter("completed");
  };

  const showIncompleteTasks = () => {
    setFilter("incomplete");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    } else {
      return true;
    }
  });

  const searchedAndFilteredTasks = filteredTasks.filter((task) =>
    task.title?.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <>
      <div className="">
        <Navbar
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <div className="px-5 w-full h-100 pt-[150px] flex flex-col justify-center bg-gray-900 container mx-auto">
        <div className="w-full flex justify-between items-center">
          <TaskForm onAdd={addTask} newTask={newTask} setNewTask={setNewTask} />
          <Filter
            show={show}
            setShow={setShow}
            showAllTasks={showAllTasks}
            showCompletedTasks={showCompletedTasks}
            showIncompleteTasks={showIncompleteTasks}
          />
        </div>
        <div className="pt-4 flex flex-wrap gap-3">
          {tasks.length === 0 && (
            <div className="w-full flex justify-center items-center">
              <h1 className="text-white font-medium text-lg">
                Задачи пока нет!
              </h1>
            </div>
          )}
          {searchedAndFilteredTasks?.map((todo) => (
            <TaskList
              todo={todo}
              key={todo.id}
              changeTask={changeTask}
              removeTask={removeTask}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

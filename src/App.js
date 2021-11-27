import "./styles.css";
import Sidebar from "./Sidebar";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([{ text: "My First Task", done: true }]);

  const createTask = () => {
    setTasks([...tasks, { text: value, done: false }]);
    setValue("");
    console.log(tasks);
  };

  const myFunction = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="tasks">
        <TaskForm value={value} onSubmit={createTask} onChange={myFunction} />
        {tasks.map((task, index) => (
          <Task task={task} key={task + index} />
        ))}
      </div>
    </div>
  );
}

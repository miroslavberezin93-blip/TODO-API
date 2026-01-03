import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { PostNewTask, GetTasks, DeleteTask, PatchTask } from "./ManageTask";

const BACKEND_URL = 'http://localhost:5225';

function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
      async function LoadTasks() {
      const res = await GetTasks(BACKEND_URL);
      setTasks(res);
    } LoadTasks();
    }, []);

  async function onSubmit(task) {
    const res = await PostNewTask(BACKEND_URL, task);
    if (res) setTasks(prev => [...prev, res]);
  }

  async function onDelete(id) {
    await DeleteTask(BACKEND_URL, id);
    setTasks(prev => prev.filter(task => task.id !== id));
    console.log(`deleted task: ${id}`);
  }

  async function onChange(id, changed) {
    await PatchTask(BACKEND_URL, id, changed);
    setTasks(prev => prev.map(task => task.id === id ? {...task, completed: changed} : task));
    console.log(`task state changed:${changed}`)
  }
    
  return (
    <div>
      <h1>Tasks</h1>
      <TaskList list={tasks} onDelete={onDelete} onChange={onChange}/>
      <TaskForm onSubmit={onSubmit}/>
    </div>
  );
} export default App;
import { useState } from "react";

function TaskForm({onSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({title, description});
        setTitle("");
        setDescription("");
    }

    return (
        <form className="bg-gray-100 gap-6 flex-1" onSubmit={handleSubmit}>
            <div className="flex flex-col flex-1 m-2">
                <label>Title:</label><input className="bg-white h-10 border border-gray-300" value={title}
                onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="flex flex-col flex-1 m-2">
                <label className="text-">Description:</label><textarea className="bg-white h-10 border border-gray-300" value={description}
                onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="flex flex-1 justify-center items-end">
                <button className="transition-colors duration-300
                 text-white bg-blue-500 hover:bg-blue-400 w-full m-2"
                  type="submit">Add</button>
            </div>
        </form>
    );
} export default TaskForm;
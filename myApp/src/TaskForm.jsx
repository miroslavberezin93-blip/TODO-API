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
        <form onSubmit={handleSubmit}>
            <label>Title:</label><input value={title}
            onChange={e => setTitle(e.target.value)}/>
            <label>Description:</label><textarea value={description}
            onChange={e => setDescription(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
} export default TaskForm;
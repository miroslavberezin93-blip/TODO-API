import { useState } from "react";

function TaskItem({task, onDelete, onChange, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title); 
    const [editDescription, setEditDescription] = useState(task.description);

    function Save() {
        const edited = {}
        if (editTitle !== task.title) edited.title = editTitle;
        if (editDescription !== task.description) edited.description = editDescription;
        if (Object.keys(edited).length === 0) {
            setIsEditing(false);
            return;
        }
        onEdit(task.id, edited);
        setIsEditing(false);
    }

    return isEditing ?
    (
        <li className="animate-fade-in grid grid-cols-4 items-center text-center border-b border-b-blue-200">
            <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
            <textarea value={editDescription} onChange={e => setEditDescription(e.target.value)} />
            <div className={`min-h-full border-r-6 ${task.completed ? 'border-r-green-500' : 'border-r-red-600'}`}></div>
            <div className="flex flex-col gap-2">
                <button className="hover:bg-gray-200 duration-300" onClick={Save}>Done</button>
                <button className="hover:bg-gray-200 duration-300" onClick={() => {
                    setIsEditing(false);
                    setEditTitle(task.title);
                    setEditDescription(task.description);
                    }}>Cancel</button>
            </div>
        </li>
    ) : (
        <li className="animate-fade-in grid grid-cols-4 items-center text-center border-b border-b-gray-200">
            <span className="wrap-break-word">{task.title}</span>
            <span className="wrap-break-word">{task.description}</span>
            <div className={`min-h-full transition-colors duration-300 border-r-6 ${task.completed ? 'border-r-green-500' : 'border-r-red-600'}`}>
                <input
                type="checkbox"
                checked={task.completed ?? false}
                onChange={e => onChange(task.id, e.target.checked)}
            />
            </div>
            <div className="flex flex-col gap-2">
                <button className="hover:bg-gray-200 duration-300" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="hover:bg-gray-200 duration-300" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </li>
    );
} export default TaskItem;
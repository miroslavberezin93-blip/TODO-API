function TaskItem({task, onDelete, onChange}) {
    return (
        <li>
            <span>{task.title}</span>
            <span>{task.description}</span>
            Completed:
            <input
                type="checkbox"
                checked={task.completed ?? false}
                onChange={e => onChange(task.id, e.target.checked)}
            />
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
} export default TaskItem;
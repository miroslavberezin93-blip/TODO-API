import TaskItem from "./TaskItem";

function TaskList({list, onDelete, onChange, onEdit}) {
    const taskListMapped = list.map(task =>
        <TaskItem key={task.id} task={task} onDelete={onDelete} onChange={onChange} onEdit={onEdit}/>
    );
    if (list.length === 0) return (
    <div className="min-h-[60vh] max-h-[60vh] overflow-y-auto flex justify-center">
        <span className="text-gray-400">Empty</span>
    </div>
    );
    return (
        <div className="min-h-[60vh] max-h-[60vh] overflow-y-auto">
            <ul>{taskListMapped}</ul>
        </div>
    );
} export default TaskList;

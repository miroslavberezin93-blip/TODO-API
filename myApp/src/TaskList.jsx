import TaskItem from "./TaskItem";

function TaskList({list, onDelete, onChange}) {
    const taskListMapped = list.map(task =>
        <TaskItem key={task.id} task={task} onDelete={onDelete} onChange={onChange}/>
    );
    if (list.length === 0) return <h1>No tasks(</h1>;
    return <ul>{taskListMapped}</ul>;
} export default TaskList;
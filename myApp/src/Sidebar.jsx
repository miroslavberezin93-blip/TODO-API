function Sidebar({onFilter}) {
    return (
        <div>
            <button onClick={() => onFilter('all')}>All</button>
            <button onClick={() => onFilter('pending')}>Pending</button>
            <button onClick={() => onFilter('completed')}>Completed</button>
        </div>
    );
} export default Sidebar;
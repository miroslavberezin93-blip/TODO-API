function Sidebar({filter, onFilter}) {
    return (
        <div className="flex flex-row text-gray-400">
            <button className={`w-36 duration-300 transition-colors hover:bg-gray-200 ${filter==='all' ? 'border-b-2 border-b-blue-500 text-black' : ''}`} 
                onClick={() => onFilter('all')}>All</button>
            <button className={`w-36 duration-300 transition-colors hover:bg-gray-200 ${filter==='pending' ? 'border-b-2 border-b-blue-500 text-black' : ''}`}
                onClick={() => onFilter('pending')}>Pending</button>
            <button className={`w-36 duration-300 transition-colors hover:bg-gray-200 ${filter==='completed' ? 'border-b-2 border-b-blue-500 text-black' : ''}`}
                onClick={() => onFilter('completed')}>Completed</button>
        </div>
    );
} export default Sidebar;
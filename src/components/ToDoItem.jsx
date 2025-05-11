// Individual To-Do item component
// Handles the display and interaction for each task
const ToDoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-3 hover:shadow-md transition-all duration-200 border border-gray-100">
      <div className="flex items-center space-x-4 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-600 rounded-md focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />
        <span className={`flex-1 text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={() => onEdit(todo)}
          className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem; 
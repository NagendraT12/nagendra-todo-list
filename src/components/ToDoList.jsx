// ToDoList component
// Manages the list of todo items and handles the input for new tasks
import { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onDelete, onToggle, onEdit }) => {
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onEdit({ id: Date.now(), text: newTodo, completed: false });
      setNewTodo('');
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setNewTodo(todo.text);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-3">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm"
          >
            {editingTodo ? 'Update' : 'Add'}
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 text-lg py-8">No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList; 
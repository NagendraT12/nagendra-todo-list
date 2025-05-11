import { useState, useEffect } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  // Initialize todos from localStorage or empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add or update a todo
  const handleEdit = (todo) => {
    if (todos.find(t => t.id === todo.id)) {
      setTodos(todos.map(t => t.id === todo.id ? todo : t))
    } else {
      setTodos([...todos, todo])
    }
  }

  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion status
  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <ToDoList
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      </main>
    </div>
  )
}

export default App

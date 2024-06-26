import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

/**
 * The main App component.
 * Manages the state of the ToDo list and provides functions to manipulate it.
 */
const App = () => {
  const [todos, setTodos] = useState([]); // State to hold the list of todos

  /**
   * Adds a new todo to the list.
   * @param {string} text - The text of the new todo.
   */
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  /**
   * Toggles the completion status of a todo.
   * @param {number} index - The index of the todo to toggle.
   */
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  /**
   * Deletes a todo from the list.
   * @param {number} index - The index of the todo to delete.
   */
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App

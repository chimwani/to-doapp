import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi'; // Import the add icon

/**
 * TodoForm component.
 * Contains an input field and a button to add a new todo.
 */
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(''); // State to hold the input value

  /**
   * Handles form submission.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return; // Prevent adding empty todos
    addTodo(value);
    setValue(''); // Reset input field
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
        style={{ flex: 1 }}
      />
      <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <FiPlus size={20} />
      </button>
    </form>
  );
};

export default TodoForm;

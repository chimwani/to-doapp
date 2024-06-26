import React from 'react';
import { FiCheck, FiEdit, FiTrash } from 'react-icons/fi'; // Import the necessary icons

/**
 * Todo component.
 * Displays individual todo item with options to toggle completion, edit, and delete the todo.
 */
const Todo = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <div
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        textDecoration: todo.isCompleted ? 'line-through' : '',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}
    >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => toggleTodo(index)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
          <FiCheck size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
          <FiEdit size={20} />
        </button>
        <button onClick={() => deleteTodo(index)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FiTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default Todo;

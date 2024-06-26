import React from 'react';
import Todo from './Todo';

/**
 * TodoList component.
 * Maps through the list of todos and renders a Todo component for each item.
 */
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index} // Unique key for each item
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

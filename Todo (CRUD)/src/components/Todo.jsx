import Item from './Item';
import { useState, useEffect, useCallback } from 'react';

function Todo() {
  const initialTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos((prev) => [
      ...prev,
      { value: task, isCompleted: false, id: new Date().getTime() },
    ]);
    setTask('');
  };

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((data) => data.id != id));
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const handleComplete = useCallback((id) => {
    setTodos((prev) =>
      prev.map((data) =>
        data.id === id ? { ...data, isCompleted: !data.isCompleted } : data
      )
    );
  }, []);

  const handleUpdate = useCallback((id, value) => {
    setTodos((prev) =>
      prev.map((data) => (data.id === id ? { ...data, value } : data))
    );
  }, []);

  return (
    <div>
      <div>
        <input
          type='text'
          value={task}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{
            width: '300px',
            height: '40px',
            fontSize: '16px',
            padding: '8px',
            marginRight: '10px',
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={addTodo}
          style={{
            width: '120px',
            height: '40px',
            fontSize: '16px',
            cursor: 'pointer',
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#7879FF',
          }}
        >
          Add Task
        </button>
      </div>

      <div style={{ marginTop: '8px' }}>
        {todos.length > 0 ? (
          todos.map((data) => (
            <Item
              key={data.id}
              data={data}
              handleDelete={deleteTodo}
              handleComplete={handleComplete}
              updateTodo={handleUpdate}
            />
          ))
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p>No List Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;

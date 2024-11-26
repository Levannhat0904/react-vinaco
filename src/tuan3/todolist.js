import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");  // Xóa nội dung trong ô input sau khi thêm
    }
  };

  // Hàm xử lý thay đổi trong ô input
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>Danh sách công việc</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={handleChange} 
        placeholder="Nhập công việc mới"
      />
      <button onClick={addTask}>Thêm công việc</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

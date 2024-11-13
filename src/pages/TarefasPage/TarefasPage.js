import React, { useState, useEffect } from 'react';
import './TarefasPage.css';
import Navbar from '../../components/NavBar/NavBar';

const TasksPage = ({ setUserLoggedIn }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, { id: Date.now(), text: newTask }];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditTask = (id) => {
    const newText = prompt('Digite o novo texto da tarefa:');
    if (newText && newText.trim() !== '') {
      const updatedTasks = tasks.map(task => 
        task.id === id ? { ...task, text: newText } : task
      );
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="tasks-page-container">
      <Navbar setUserLoggedIn={setUserLoggedIn} />
      <div className="tasks-content-container">
        <div className="tasks-page-header">
          <h2>Lista de Tarefas</h2>
        </div>
        <div className="add-task-container">
          <input
            className="add-task-input"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <button className="add-task-button" onClick={handleAddTask}>Adicionar</button>
        </div>
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li className="task-item" key={task.id}>
              {task.text}
              <button className="task-button" onClick={() => handleEditTask(task.id)}>Editar</button>
              <button className="task-button" onClick={() => handleDeleteTask(task.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
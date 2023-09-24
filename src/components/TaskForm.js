import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../actions/taskAction';

const TaskForm = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const [id, setId] = useState(1);
    const [task, setTask] = useState({id, title: '', description: '' });
    const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id+1);
    dispatch(addTask({...task, id}));
    setTask({ title: '', description: '' });
  };

  return (
    <div>
      <h3 style={{textAlign:"center"}}>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
 <input
          type="text"
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <button  className={darkMode ? 'dark-btn' : 'light-btn'} type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
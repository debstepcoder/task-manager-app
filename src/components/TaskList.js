import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../actions/taskAction';
import styles from '../assets/TaskList.module.css'; // Import the CSS module

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({});


  const handleEdit = (task) => {
    setEditing(true);
    setEditedTask(task);
  };

  const saveEditedTask = () => {
    dispatch(editTask(editedTask));
    setEditing(false);
    setEditedTask({});
  };

  return (
    <div className={styles['task-box']}>
      <h3  className={styles['task-heading']}>Task List</h3>
      <ul className={styles['task-list']}>
        {tasks.map((task) => (
          <li key={task.id} className={`${styles['task-item']} ${darkMode ? styles.dark : ''}`}>
            {editing && editedTask.id === task.id ? (
              <div className={styles['edit-form']}>
                <input
                  type="text"
                  value={editedTask.title}
                  onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                />
                <textarea
                  value={editedTask.description}
                  onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                />
                <button className={styles[darkMode ? 'dark-del-btn' : 'light-del-btn']} onClick={saveEditedTask}>Save</button>
              </div>
            ) : (
              <div className={styles['task-details']}>
                <span className={styles['task-title']}>{task.title}</span>
                <p className={styles['task-description']}>{task.description}</p>
              </div>
            )}
            <div className={styles['action-box']}>
              {editing && editedTask.id === task.id ? (
                null
              ) : (
                <button className={styles[darkMode ? 'dark-del-btn' : 'light-del-btn']} onClick={() => handleEdit(task)}>Edit</button>
              )}
              <button className={styles[ darkMode ? 'dark-edit-btn' : 'light-edit-btn']}  onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

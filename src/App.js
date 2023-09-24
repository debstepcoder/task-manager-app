import './App.css';
import React from 'react';
import Headers from './components/Headers';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
   <>
      <Headers/>
      <TaskForm/>
      <TaskList/>
   </>
  );
}

export default App;

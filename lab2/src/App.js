import './App.css';
import React, { useState, useContext } from 'react';
import TimerList from './Components/TimerList';
import { Context } from './Context';
import Form from './Form';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [timer, setTimerList] = useContext(Context);

  

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    timer.push({
      title: title,
      project: project,
      editMode: false,
      timer: '00:00:00',
      hour: 0,
      min: 0,
      sec: 0,
    });
    setTitle('');
    setProject('');
    setTimerList(timer);
    setShowForm(false);
  };

  return (
    <div className='App'>
      <div className='app__header'>Timers</div>
      
      <TimerList />
      {showForm && (
        <Form
          creation={true}
          changeEditMode={() => {
            setShowForm(false);
          }}
          handleSubmit={handleSubmit}
          title={title}
          project={project}
          handleProject={handleProject}
          handleTitle={handleTitle}
        />
      )}
      <div
        className='showForm__button'
        onClick={() => {
          setShowForm(true);
        }}>
        +
      </div>
      
    </div>
  );
}

export default App;

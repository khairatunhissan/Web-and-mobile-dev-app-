import { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = (props) => {
  const [timer, setTimer] = useState([
    {
      title: 'Stopwatch',
      project: 'Web Lab',
      hour: 0,
      min: 0,
      sec: 0,
      editMode: false,
    },
  ]);
  return (
    <Context.Provider value={[timer, setTimer]}>
      {props.children}
    </Context.Provider>
  );
};

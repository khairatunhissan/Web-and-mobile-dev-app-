import React, { useContext } from 'react';
import Timer from '../Components/Timer';
import { Context } from '../Context';


const TimerList = () => {
  const [timerList, setTimerList] = useContext(Context);
  return (
    <div>
      {timerList.map((timer, index) => (
        <Timer
          key={index}
          id={index}
          title={timer.title}
          project={timer.project}
          timer={timer.timer}
          editMode={timer.editMode}
          timerList={timerList}
          setTimerList={setTimerList}
        />
      ))}
    </div>
  );
};

export default TimerList;

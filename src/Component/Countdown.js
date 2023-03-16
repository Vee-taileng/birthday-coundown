// import React, { useEffect, useState } from 'react'
// import "./Countdown.css"

// const Countdown = () => {
//     const [days, setDays] = useState(0);
//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);
//     const [inputDate, setInputDate] = useState("30 March 2023");
//     const [currentDate, setCurrentDate] = useState(inputDate);

//     useEffect(() => {
//         setTimeout(() => {
//             const changingDate = new Date(inputDate);
//             const currentDate = new Date();
//             const totalSeconds = (changingDate - currentDate) / 1000;

//             setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
//             setHours(formatTime(Math.floor(totalSeconds / 3600) % 24));
//             setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60));
//             setSeconds(formatTime(Math.floor(totalSeconds % 60)))
//         }, 1000);
//     }, [currentDate])
//     function formatTime(time) {
//         return time < 10 ? `0${time}` : time;
//     }

//     const onChangeHandler = (event) => {
//         setInputDate(event.target.value)
//     }

//     const onClickHandler = () => {
//         setCurrentDate(inputDate)
//     }

//   return (
//       <div className="countdown-container">
//         <div className="countdown-value">
//             <div className="countdown-values">
//                 <p className="big-text">{days}</p>
//                 <span>days</span>
//             </div>
//             <div className="countdown-values">
//                 <p className="big-text">{hours}</p>
//                 <span>hours</span>
//             </div>
//             <div className="countdown-values">
//                 <p className="big-text">{minutes}</p>
//                 <span>minutes</span>
//             </div>
//             <div className="countdown-values">
//                 <p className="big-text">{seconds}</p>
//                 <span>seconds</span>
//             </div>
//           </div>
//           <div className="countdown-input-field">
//               <input type="text" className='countdown-input' onChange={onChangeHandler}/>
//               <button className="countdown-input-btn" onClick={onClickHandler}>Countdown</button>
//           </div>
//     </div>
//   )
// }

// export default Countdown


import React, { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState('30 March 2023');
  const [currentDate, setCurrentDate] = useState(inputDate);

  useEffect(() => {
    let timeoutId = null;

    const updateCountdown = () => {
      const changingDate = new Date(inputDate);
      const currentDate = new Date();
      const totalSeconds = (changingDate - currentDate) / 1000;

      setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
      setHours(formatTime(Math.floor(totalSeconds / 3600) % 24));
      setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60));
      setSeconds(formatTime(Math.floor(totalSeconds % 60)));

      timeoutId = setTimeout(updateCountdown, 1000);
    };

    updateCountdown();

    return () => clearTimeout(timeoutId);
  }, [inputDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };

  return (
    <div className="countdown-container">
      <div className="countdown-value">
              <div className="countdown-values">
            <div className="card"></div>
          <p className="big-text">{days}</p>
          <span>days</span>
        </div>
        <div className="countdown-values">
          <p className="big-text">{hours}</p>
          <span>hours</span>
        </div>
        <div className="countdown-values">
          <p className="big-text">{minutes}</p>
          <span>minutes</span>
        </div>
        <div className="countdown-values">
          <p className="big-text">{seconds}</p>
          <span>seconds</span>
        </div>
      </div>
      <div className="countdown-input-field">
        <input type="text" className="countdown-input" onChange={onChangeHandler} />
        <button className="countdown-input-btn" onClick={onClickHandler}>
          Countdown
        </button>
      </div>
    </div>
  );
};

export default Countdown;


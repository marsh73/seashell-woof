import React, { useState, useEffect, useContext } from "react";
import "./App.css";


function App() {
  const [dogImg, setDogImg] = useState(null);
  const { addNotification, notifications } = useContext(window['NotificationsContext']);
  let count = 0;
  let interval = null;

  interval = setInterval(pushNotify, 5000);
  function pushNotify() {
    if (count > 5) {
      clearInterval(interval);
    }

    if (addNotification && count > 0) {
      console.log(count, 'adding message', addNotification);
      addNotification(`you are being notified for time #${count}`, 'alert');
    }

    count++;
  }
  const fetchDoggo = () => {
    setDogImg("");
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    console.log('notifications from dog', notifications);
  },[notifications]);

  useEffect(() => {
    if (dogImg === null) {
      fetchDoggo();
    }
  });

  return (
    <div>
      <header>
        <h3>Doggo of the day</h3>
        <div>
          <button onClick={() => fetchDoggo()}>New Doggo</button>
        </div>
        {dogImg !== "" ? (
          <div>
            <img src={dogImg} width="400px" alt="doggo" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;

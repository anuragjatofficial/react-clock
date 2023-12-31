function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-firstGr to-secondGr">
      <Clock />
    </div>
  );
}

function Clock(){

    const [breakLength,setBreakLength] = React.useState(5);
    const [sessionLength, setSessionLength] = React.useState(25);
    const [play, setPlay] = React.useState(false);
    const [minutes, setMinutes] = React.useState(sessionLength);
    // const [seconds, setSeconds] = React.useState(0);
    let interval;
    const handlePlayPause = ()=>{
        setPlay(!play);
        if(play){
          console.log(play);
          clearInterval(interval);
        }
    };

    React.useEffect(() => {
      if (play) {
        let minutes = sessionLength;
        let seconds = 0;
         interval = setInterval(() => {
          if (seconds == 0) {
            seconds = 60;
            minutes--;
            document.getElementById("minutes").innerHTML = minutes;
            if(minutes==-1){
              clearInterval(interval);
            }
          }
          seconds--;
          document.getElementById("seconds").innerHTML = seconds;
        }, 1000);
      }
    }, [play, setPlay]);

    const handleRefresh = ()=>{
        setSessionLength(25);
        setBreakLength(5);
    };

    return (
      <div className="flex items-center w-1/2 flex-col gap-6">
        <div className="flex-row flex w-full justify-around">
          <div>
            <div id="break-label">Break Length</div>
            <div className="flex justify-around">
              <button
                className="btn-primary"
                id="break-increment"
                onClick={() =>
                  breakLength < 60
                    ? setBreakLength(breakLength + 1)
                    : setBreakLength(breakLength)
                }
              >
                <i class="fa-solid fa-sort-up fa-xl"></i>
              </button>

              <div id="break-length">{breakLength}</div>

              <button
                className="btn-primary"
                id="break-decrement"
                onClick={() =>
                  breakLength > 0
                    ? setBreakLength(breakLength - 1)
                    : setBreakLength(breakLength)
                }
              >
                <i class="fa-solid fa-sort-down fa-xl"></i>
              </button>
            </div>
          </div>

          <div className="flex ">
            <div className="flex flex-col">
              <div id="session-label">Session Length</div>
              <div className="flex  justify-around">
                <button
                  id="session-increment"
                  onClick={() =>
                    sessionLength < 60
                      ? setSessionLength(sessionLength + 1)
                      : setSessionLength(sessionLength)
                  }
                >
                  <i className="fa-solid fa-sort-up fa-xl"></i>
                </button>
                <div id="session-length">{sessionLength}</div>
                <button
                  className="btn-primary"
                  id="session-decrement"
                  onClick={() =>
                    sessionLength > 1
                      ? setSessionLength(sessionLength - 1)
                      : setSessionLength(sessionLength)
                  }
                >
                  <i class="fa-solid fa-sort-down fa-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* timer */}

        <div className="bg-transparancy rounded-md p-3">
          <div id="timer-label">Session</div>
          <div id="time-left">
            <span id="minutes">{sessionLength}</span>:
            <span id="seconds">00</span>
          </div>
        </div>

        {/* clickables */}

        <div>
          <button
            className="btn-primary"
            id="start_stop"
            onClick={handlePlayPause}
          >
            {play ? (
              <i className="fa fa-pause" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-play" aria-hidden="true"></i>
            )}
          </button>
          <button className="btn-primary" id="reset" onClick={handleRefresh}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
}

ReactDOM.render(
        <App/>,
        document.getElementById('root')
);
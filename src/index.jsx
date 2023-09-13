function App() {
  return (
    <div className="w-screen h-screen">
      <Clock />
    </div>
  );
}

function Clock(){

    const [breakLength,setBreakLength] = React.useState(5);
    const [sessionLength, setSessionLength] = React.useState(25);
    const [play, setPlay] = React.useState(false);


    const handlePlayPause = ()=>{
        setPlay(!play);
    };

    React.useEffect(() => {
      console.log(play);
      let interval;
      if (play) {
        interval = setInterval(() => {
          setSessionLength((prevSessionLength) => prevSessionLength - 1);
        }, 1000);
      }

      if (setSessionLength === 0) {
        setPlay(false);
        clearInterval(interval); // Stop the timer when it reaches 0
      }

      return () => {
        clearInterval(interval); // Clean up the interval on unmount or when isActive changes
      };
    }, [play, setPlay, sessionLength, sessionLength]);

    const handleRefresh = ()=>{
        setSessionLength(25);
        setBreakLength(5);
    };

    return (
      <div className="flex items-center flex-col">
        <div className="flex-row flex">
          <div>
            <div id="break-label">Break Length</div>
            <div className="flex">
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

          <div className="flex">
            <div className="flex flex-col">
              <div id="session-label">Session Length</div>
              <div className="flex">
                <button
                  className="btn-primary"
                  id="session-increment"
                  onClick={() =>
                    sessionLength < 60
                      ? setSessionLength(sessionLength + 1)
                      : setSessionLength(sessionLength)
                  }
                >
                  <i class="fa-solid fa-sort-up fa-xl"></i>
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

        <div>
          <div id="timer-label">Session</div>
          <div id="time-left">{sessionLength+`:00`}</div>
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
          <button className="btn-primary" id="reset"
          onClick={handleRefresh}>
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
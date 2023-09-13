function App() {
  return (
    <div>
        <Clock/>
    </div>
  )
}

function Clock(){

    const [breakLength,setBreakLength] = React.useState(0);
    const [sessionLength, setSessionLength] = React.useState(0);

    return (
      <div className="w-screen h-screen">
        <div className="flex justify-around">
          <div className="flex flex-col">
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
          <div id="timer-label"></div>
          <div id="time-left"></div>
        </div>
        {/* clickables */}
        <div>
          <button className="btn-primary" id="start_stop"></button>
          <button className="btn-primary" id="reset"></button>
        </div>
      </div>
    );
}

ReactDOM.render(
        <App/>,
        document.getElementById('root')
);
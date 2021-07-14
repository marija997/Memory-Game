import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Timer = ({ endGame }) => {
  const dispatch = useDispatch();
  const numberOfMoves = useSelector((store) => store.memory.move);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  //starting timer after first move is played
  useEffect(() => {
    if (numberOfMoves > 1) {
      setIsActive(true);
    }
  }, [numberOfMoves]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (endGame) {
      setIsActive(false);
      let timeState = Math.floor((time / 1000) % 60);
      dispatch({ type: "SET_END_TIME", timeState });
    }
  }, [endGame, dispatch, time]);

  return (
    <div className={`timer`}>
      {/* hours */}
      <span className="digits">
        {("0" + Math.floor((time / 60000000) % 60)).slice(-2)}:
      </span>
      {/* minutes */}
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      {/* second */}
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
    </div>
  );
};

export default Timer;

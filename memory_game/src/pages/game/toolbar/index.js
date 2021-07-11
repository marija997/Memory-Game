import { useSelector } from "react-redux";
import Timer from "./timer";

const GameToolbar = ({ endGame }) => {
  const numberOfFoundPairs = useSelector(
    (store) => store.memory.numOfFoundPairs
  );

  return (
    <div className={`game-toolbar`}>
      <div className={`number-of-found-pairs`}>
        <h1>Number of found pairs: {numberOfFoundPairs}</h1>
      </div>
      <div className={`timer-container`}>
        <h1>Time:</h1>
        <Timer endGame={endGame} />
      </div>
    </div>
  );
};

export default GameToolbar;

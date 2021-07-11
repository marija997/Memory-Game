import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/button";

const GameSettings = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const handleStartGame = useCallback(
    (mode) => {
      return dispatch({ type: "SET_GAME_DIFFICULTY", mode: mode });
    },
    [dispatch]
  );

  const handleClick = useCallback(() => {
    setActive(!active);
  }, [active, setActive]);

  return (
    <div className={`game-settings`}>
      {active ? (
        <div className={`game-difficulty-settings`}>
          <Button
            to={`/game`}
            text={`Easy`}
            handleClick={() => handleStartGame("easy")}
          />
          <Button
            to={`/game`}
            text={`Medium`}
            handleClick={() => handleStartGame("medium")}
          />
          <Button
            to={`/game`}
            text={`Hard`}
            handleClick={() => handleStartGame("hard")}
          />
        </div>
      ) : (
        <Button to={""} text={`Start Game`} handleClick={handleClick}></Button>
      )}
    </div>
  );
};

export default GameSettings;

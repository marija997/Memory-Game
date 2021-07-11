import Button from "components/button";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const GameDifficulty = () => {
  const dispatch = useDispatch();

  const handleStartGame = useCallback(
    (mode) => {
      return dispatch({ type: "SET_GAME_DIFFICULTY", mode: mode });
    },
    [dispatch]
  );
  return (
    <div className={`game-difficulty-settings`}>
      <div className={`section-title`}>
        <h2>Please select game mode</h2>
      </div>
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
  );
};

export default GameDifficulty;

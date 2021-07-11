import { useCallback, useState } from "react";
import Button from "../../../components/button";
import GameDifficulty from "./gameDifficulty";
import UserSelection from "./userSelection";

const GameSettings = () => {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(
    (value) => {
      setActive(value);
    },
    [setActive]
  );

  return (
    <div className={`game-settings`}>
      {active === "game-difficulty" ? (
        <GameDifficulty />
      ) : active === "user-selection" ? (
        <UserSelection handleClick={handleClick} />
      ) : (
        <div className={`game-top-scores`}>
          <Button
            to={""}
            text={`Start Game`}
            handleClick={() => handleClick("user-selection")}
          />
        </div>
      )}
    </div>
  );
};

export default GameSettings;

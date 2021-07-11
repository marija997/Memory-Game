import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import { isEqual } from "lodash";
import React from "react";
import GameToolbar from "./toolbar";
import Particles from "../../components/particles";
import GameOver from "./gameOver";

const Game = memo(
  () => {
    const dispatch = useDispatch();
    dispatch({ type: "NEW_GAME" });
    const cards = useSelector((store) => store.memory.cards);

    const checkPair = useSelector((store) => store.memory.checkPair);
    const flipDownPair = useSelector((store) => store.memory.flipDownPair);
    const gameMode = useSelector((store) => store.memory.mode);
    const endGame = useSelector((store) => store.memory.endGame);

    useEffect(() => {
      if (checkPair) {
        const timer = setTimeout(() => {
          dispatch({ type: "CHECK_PAIR" });
        }, 500);
        return () => clearTimeout(timer);
      }
      if (flipDownPair) {
        const timer = setTimeout(() => {
          dispatch({ type: "FLIP_DOWN_PAIR" });
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [checkPair, flipDownPair, dispatch]);

    return (
      <div className={`game ${gameMode}`}>
        <Particles />
        <GameToolbar endGame={endGame} />
        {endGame ? (
          <GameOver />
        ) : (
          <div id="board" className="board">
            {cards?.map((card) => {
              return <Card key={`memory-card-${card.id}`} card={card} />;
            })}
          </div>
        )}
      </div>
    );
  },
  (prevState, nextState) => {
    if (isEqual(prevState, nextState)) return true;
    return false;
  }
);

export default Game;

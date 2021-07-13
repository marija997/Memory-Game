import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../../components/title";
import Button from "../../../components/button";

const GameOver = () => {
  const dispatch = useDispatch();
  const gameScore = useSelector((store) => store.memory);
  const username = useSelector((store) => store.users.activeUser.username);
  const gameTime = useSelector((store) => store.memory.time);

  useEffect(() => {
    if (gameTime) {
      dispatch({
        type: "ADD_RESULT_TO_SCOREBOARD",
        score: {
          mode: gameScore.mode,
          moves: gameScore.move,
          time: gameTime,
          username: username,
        },
      });
    }
  }, [gameTime]);

  return (
    <div className={`game-over`}>
      <div className={`title-container`}>
        <Title text={`CONGRATULATIONS!`} />
        <Title text={`YOU HAVE WON!`} />
      </div>
      <br />
      <div className={`buttons`}>
        <Button text={`Back to Home`} to={`/`} />
        <Button text={`Go To Score Board`} to={`/score-board`} />
      </div>
    </div>
  );
};

export default GameOver;

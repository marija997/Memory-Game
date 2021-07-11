import Title from "../../../components/title";
import Button from "../../../components/button";

const GameOver = () => {
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

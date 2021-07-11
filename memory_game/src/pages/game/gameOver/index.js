import Title from "../../../components/title";
import Button from "../../../components/button";

const GameOver = () => {
  return (
    <div className={`game-over`}>
      <Button text={`Go To Score Board`} />
      <br />
      <div className={`title-container`}>
        <Title text={`CONGRATULATIONS!`} />
        <Title text={`YOU HAVE WON!`} />
      </div>
    </div>
  );
};

export default GameOver;

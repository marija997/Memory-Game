import Title from "components/title";
import Particles from "components/particles";
import Tabs from "./tabs";

const ScoreBoard = () => {
  return (
    <div className={`score-board`}>
      <Particles />
      <Title text={`Score Board`} />
      <Tabs />
    </div>
  );
};
export default ScoreBoard;

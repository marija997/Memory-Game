import GameSettings from "./gameSettings";
import Particles from "../../components/particles";
import Title from "../../components/title";

const Home = () => {
  return (
    <div className={`home`}>
      <Title text={`Memory Game`} />
      <Particles />
      <GameSettings />
    </div>
  );
};
export default Home;

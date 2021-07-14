import { useState } from "react";
import { useSelector } from "react-redux";
import TabsHeading from "./tabsHeading";

const Tabs = () => {
  const scores = useSelector((store) => store.scoreboard.scores);
  const [activeTab, setActiveTab] = useState("hard");

  const activeScores = scores[`${activeTab}Mode`].sort((a, b) => {
    if (a.time === b.time) return a.moves - b.moves;
    return a.time - b.time;
  });

  return (
    <div className={`tabs-container`}>
      <TabsHeading setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className={`tabs-content ${activeTab}`}>
        {activeScores.map((user, index) => {
          const hours = Math.floor(user.time / 1800);
          const minutes = Math.floor(user.time / 60);
          const seconds = user.time % 60;
          const time = `${hours > 9 ? hours : `0${hours}`}:${
            minutes > 9 ? minutes : `0${minutes}`
          }:${seconds}`;

          return (
            <div key={`score-user-${user.username}`} className={`user`}>
              <span className={`users-place`}>{index + 1}</span>
              <p>Username: {user.username}</p>
              <p>Number of moves: {user.moves}</p>
              <p>Time: {time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;

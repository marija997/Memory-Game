import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const TopScoresWidget = () => {
  const topScores = useSelector((state) => state.scoreboard.scores);
  const [activeTab, setActiveTab] = useState("hard");

  const handleChange = useCallback(
    (value) => {
      setActiveTab(value);
    },
    [setActiveTab]
  );
  return (
    <div className={`top-scores-widget`}>
      <h2 className={`top-scores-title`}>Top 3 Scores</h2>
      <div className={`tabs`}>
        <div
          className={`top-score-tab ${activeTab === "hard" ? "active" : ""}`}
          onClick={() => handleChange("hard")}
        >
          <p>Hard Mode</p>
        </div>
        <div
          className={`top-score-tab ${activeTab === "medium" ? "active" : ""}`}
          onClick={() => handleChange("medium")}
        >
          <p>Medium Mode</p>
        </div>
        <div
          className={`top-score-tab ${activeTab === "easy" ? "active" : ""}`}
          onClick={() => handleChange("easy")}
        >
          <p>Easy Mode</p>
        </div>
      </div>
      <div className={`tabs-content`}>
        {topScores[`${activeTab}Mode`].map((user) => {
          return (
            <div key={`top-score-user-${user.username}`} className={`top-user`}>
              {user.username}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopScoresWidget;

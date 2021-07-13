import { useCallback } from "react";

const TabsHeading = ({ setActiveTab, activeTab }) => {
  const handleChange = useCallback(
    (value) => {
      setActiveTab(value);
    },
    [setActiveTab]
  );

  return (
    <div className={`tabs-heading`}>
      <div className={`tabs ${activeTab}`}>
        <div
          className={`score-tab ${activeTab === "hard" ? "active" : ""}`}
          onClick={() => handleChange("hard")}
        >
          <p>Hard Mode</p>
        </div>
        <div
          className={`score-tab ${activeTab === "medium" ? "active" : ""}`}
          onClick={() => handleChange("medium")}
        >
          <p>Medium Mode</p>
        </div>
        <div
          className={`score-tab ${activeTab === "easy" ? "active" : ""}`}
          onClick={() => handleChange("easy")}
        >
          <p>Easy Mode</p>
        </div>
      </div>
    </div>
  );
};
export default TabsHeading;

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id={`sidebar`}>
      <div>
        <Link to={`/`}>
          <p> Home </p>
        </Link>
      </div>
      <div>
        <Link to={`/game`}>
          <p>New Game</p>
        </Link>
      </div>
      <div>
        <Link to={`/score-board`}>
          <p>Score Board</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faTrophy,
} from "@fortawesome/fontawesome-free-solid";

const Sidebar = () => {
  const modeIsSet = useSelector((store) => store.memory.mode);
  const userIsSet = useSelector((store) => store.users.activeUser);
  const showGameLink = modeIsSet && userIsSet;
  const location = useLocation();
  let url = location.pathname;

  return (
    <div id={`sidebar`} className={`${showGameLink && "game-link-visible"}`}>
      <div className={`content ${showGameLink && "game-link-visible"}`}>
        <Link
          to={`/`}
          className={`sidebar-item ${url === "/" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faHome} invert={"true"} size={"lg"} />
        </Link>
        {showGameLink && (
          <Link
            to={`/game`}
            className={`sidebar-item ${url === "/game" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faGamepad} invert={"true"} size={"lg"} />
          </Link>
        )}
        <Link
          to={`/score-board`}
          className={`sidebar-item ${url === "/score-board" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faTrophy} invert={"true"} size={"lg"} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

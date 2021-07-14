import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faTrophy,
} from "@fortawesome/fontawesome-free-solid";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const modeIsSet = useSelector((store) => store.memory.mode);
  const userIsSet = useSelector((store) => store.users.activeUser);
  const showGameLink = modeIsSet && userIsSet;

  return (
    <div id={`sidebar`} className={`${showGameLink && "game-link-visible"}`}>
      <div className={`content ${showGameLink && "game-link-visible"}`}>
        <Link to={`/`} className={`sidebar-item`}>
          <FontAwesomeIcon icon={faHome} invert size={"lg"} />
        </Link>
        {showGameLink && (
          <Link to={`/game`} className={`sidebar-item`}>
            <FontAwesomeIcon icon={faGamepad} invert size={"lg"} />
          </Link>
        )}
        <Link to={`/score-board`} className={`sidebar-item`}>
          <FontAwesomeIcon icon={faTrophy} invert size={"lg"} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

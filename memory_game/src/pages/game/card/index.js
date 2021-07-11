import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const guess1 = useSelector((store) => store.memory.guess1);
  const enableClick = card.discovered
    ? false
    : guess1 !== card.id
    ? true
    : false;

  const handleFlip = useCallback(() => {
    if (enableClick) {
      dispatch({ type: "FLIP_CARD", id: card.id });
    }
  }, [enableClick, card?.id, dispatch]);

  return (
    <div
      className={`card ${card.flipped || card.discovered ? "flip" : ""} ${
        card.wrong ? "wrong" : ""
      }`}
      onClick={handleFlip}
    >
      <div className={`card-back ${card.discovered ? "match" : ""}`}>
        <FontAwesomeIcon icon={card?.icon} invert="true" />
      </div>
      <div className={`card-front `}></div>
    </div>
  );
};

export default Card;

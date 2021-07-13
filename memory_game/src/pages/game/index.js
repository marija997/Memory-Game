import { memo } from "react";
import { useSelector } from "react-redux";
import { isEqual } from "lodash";
import React from "react";
import GameRender from "./game";
import { Redirect } from "react-router-dom";

const Game = memo(
  () => {
    const hasMode = useSelector((store) => store.memory.mode);

    if (hasMode === undefined) return <Redirect to={`/`} />;

    return <GameRender />;
  },
  (prevState, nextState) => {
    if (isEqual(prevState, nextState)) return true;
    return false;
  }
);

export default Game;

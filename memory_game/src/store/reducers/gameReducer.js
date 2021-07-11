import {
  SET_GAME_DIFFICULTY,
  CHECK_PAIR,
  FLIP_CARD,
  FLIP_DOWN_PAIR,
  NEW_GAME,
} from "../actions/gameActions";
import { generateCards } from "../../pages/game/helper";

const initialState = {
  move: 1,
  time: 0,
  numOfFoundPairs: 0,
  guess1: null,
  guess2: null,
  maxNumberOfPairs: 10,
  cards: generateCards(10),
  mode: "hard",
};

export default function memory(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_DIFFICULTY:
      let gameState = { ...state, mode: action.mode };
      if (action.mode === "easy") {
        Object.assign(gameState, {
          maxNumberOfPairs: 6,
          cards: generateCards(6),
        });
      } else if (action.mode === "medium") {
        Object.assign(gameState, {
          maxNumberOfPairs: 8,
          cards: generateCards(8),
        });
      } else {
        Object.assign(gameState, {
          maxNumberOfPairs: 10,
          cards: generateCards(10),
        });
      }
      return gameState;

    case FLIP_CARD:
      let newState = {
        move: state.move + 1,
        numOfFoundPairs: state.numOfFoundPairs,
        maxNumberOfPairs: state.maxNumberOfPairs,
        mode: state.mode,
      };
      let cardClicked = state.cards.find((card) => {
        return card.id === action.id;
      });

      if (state.move % 2 === 1) {
        Object.assign(newState, {
          guess1: cardClicked.id,
          guess2: null,
          cards: state.cards.map((card) => {
            return card.id === action.id
              ? Object.assign({}, card, {
                  flipped: true,
                  wrong: false,
                })
              : Object.assign({}, card, {
                  flipped: false,
                  wrong: false,
                });
          }),
        });
      } else if (state.guess1 === action.id) {
        Object.assign(newState, { ...state });
      } else {
        Object.assign(newState, {
          guess1: state.guess1,
          guess2: cardClicked.rel,
          checkPair: true,
          cards: state.cards.map((card) => {
            return card.id === action.id || card.id === state.guess1
              ? Object.assign({}, card, {
                  flipped: true,
                  wrong: false,
                })
              : Object.assign({}, card, {
                  flipped: false,
                  wrong: false,
                });
          }),
        });
      }
      return newState;

    case CHECK_PAIR:
      let modifiedState = {
        move: state.move,
        maxNumberOfPairs: state.maxNumberOfPairs,
        mode: state.mode,
      };
      let secondGuessRel = state.cards.find((card) => {
        return card.id === state.guess2;
      });
      if (state.guess2 === state.guess1) {
        const endGame = state.maxNumberOfPairs === state.numOfFoundPairs + 1;
        Object.assign(modifiedState, {
          endGame: endGame,
          guess1: null,
          guess2: null,
          numOfFoundPairs: state.numOfFoundPairs + 1,
          cards: state.cards.map((card) => {
            return card.id === secondGuessRel.rel || card.id === state.guess1
              ? Object.assign({}, card, {
                  flipped: true,
                  discovered: true,
                  wrong: false,
                })
              : card;
          }),
        });
      } else {
        Object.assign(modifiedState, {
          guess1: state.guess1,
          guess2: state.guess2,
          flipDownPair: true,
          numOfFoundPairs: state.numOfFoundPairs,
          cards: state.cards.map((card) => {
            return card.id === secondGuessRel.rel || card.id === state.guess1
              ? Object.assign({}, card, {
                  flipped: true,
                  wrong: true,
                })
              : card;
          }),
        });
      }
      return modifiedState;

    case FLIP_DOWN_PAIR:
      const resetFlippedCards = {
        move: state.move,
        numOfFoundPairs: state.numOfFoundPairs,
        maxNumberOfPairs: state.maxNumberOfPairs,
        mode: state.mode,
      };
      let secondGuessRelFlipDown = state.cards.find((card) => {
        return card.id === state.guess2;
      });
      Object.assign(resetFlippedCards, {
        guess1: null,
        guess2: null,
        cards: state.cards.map((card) => {
          return card.id === secondGuessRelFlipDown.rel ||
            card.id === state.guess1
            ? Object.assign({}, card, {
                flipped: false,
                wrong: false,
              })
            : card;
        }),
      });
      return resetFlippedCards;

    case NEW_GAME:
      const newGame = {
        mode: state.mode,
        maxNumberOfPairs: state.maxNumberOfPairs,
      };
      Object.assign(newGame, {
        move: 1,
        time: 0,
        guess1: null,
        guess2: null,
        cards: generateCards(),
      });

    default:
      return state;
  }
}

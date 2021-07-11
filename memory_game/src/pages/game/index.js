import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import { isEqual } from "lodash";
import React from "react";
import GameToolbar from "./toolbar";
import Particles from "../../components/particles";
import GameOver from "./gameOver";

const Game = memo(
  () => {
    const dispatch = useDispatch();
    const cards = useSelector((store) => store.memory.cards);

    const checkPair = useSelector((store) => store.memory.checkPair);
    const flipDownPair = useSelector((store) => store.memory.flipDownPair);
    const gameMode = useSelector((store) => store.memory.mode);
    const endGame = useSelector((store) => store.memory.endGame);

    useEffect(() => {
      if (checkPair) {
        const timer = setTimeout(() => {
          dispatch({ type: "CHECK_PAIR" });
        }, 500);
        return () => clearTimeout(timer);
      }
      if (flipDownPair) {
        const timer = setTimeout(() => {
          dispatch({ type: "FLIP_DOWN_PAIR" });
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [checkPair, flipDownPair, dispatch]);

    return (
      <div className={`game ${gameMode}`}>
        <Particles />
        <GameToolbar endGame={endGame} />
        {endGame ? (
          <GameOver />
        ) : (
          <div id="board" className="board">
            {cards?.map((card) => {
              return <Card key={`memory-card-${card.id}`} card={card} />;
            })}
          </div>
        )}
      </div>
    );
  },
  (prevState, nextState) => {
    if (isEqual(prevState, nextState)) return true;
    return false;
  }
);

export default Game;

// import { useEffect } from "react";

// let timer = false;
// let time = 0;
// const cards = [
//   "far fa-gem",
//   "far fa-gem",
//   "far fa-paper-plane",
//   "far fa-paper-plane",
//   "fas fa-anchor",
//   "fas fa-anchor",
//   "fas fa-bolt",
//   "fas fa-bolt",
//   "fas fa-cube",
//   "fas fa-cube",
//   "fas fa-leaf",
//   "fas fa-leaf",
//   "fas fa-bicycle",
//   "fas fa-bicycle",
//   "fas fa-bomb",
//   "fas fa-bomb",
// ];

// function display(array) {
//   let items = shuffle(cards);
//   // console.log(items);
//   // create HTML for each of the items
//   // <div class="card">
//   //     <div class="front"></div>
//   //     <div class="back"></div>
//   // </div>
//   for (let item of items) {
//     let list = document.getElementById("deck");
//     let newListItem = document.createElement("div");
//     newListItem.classList.add("card");
//     let front = document.createElement("div");
//     front.classList.add("front");
//     newListItem.appendChild(front);
//     let back = document.createElement("div");
//     back.classList.add("back");
//     back.innerHTML = `<i class="${item}"></i>`;
//     newListItem.appendChild(back);
//     list.appendChild(newListItem);
//   }
// }

// // Shuffle function from http://stackoverflow.com/a/2450976
// function shuffle(array) {
//   var currentIndex = array.length,
//     temporaryValue,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// let matches = []; //temporary array to hold possibly matched items
// let matched = []; // array to hold all the matched items

// document.addEventListener("click", (event) => {
//   event.preventDefault();
//   setTimer();
//   if (event.target.parentElement.classList.value == "card") {
//     let card = event.target.parentElement;
//     console.log(card.classList.value);
//     card.classList.add("flip");
//     matchList(card);
//     moveUp();
//   }
// });

// // reloads the page if the restart icon is pressed
// // let restart = document.getElementById("restart");

// // restart.addEventListener("click", () => {
// //   window.location.reload(true);
// // });

// // checks if the two cards selected matches, if all cards are matched, win function is called
// function matchList(card) {
//   matches.push(card);
//   if (matches.length == 2) {
//     check(matches[0], matches[1]);
//   }
//   if (matched.length == 16) {
//     win();
//   }
// }

// // checks if the two cards selected matched, if not, cards are turned over
// function check(arr1, arr2) {
//   if (arr1.innerHTML == arr2.innerHTML) {
//     matched.push(arr1.innerHTML);
//     matched.push(arr2.innerHTML);
//     setTimeout(function () {
//       arr1.lastChild.classList.add("match");
//     }, 350);
//     setTimeout(function () {
//       arr2.lastChild.classList.add("match");
//     }, 350);
//   } else {
//     setTimeout(function () {
//       arr1.lastChild.classList.add("wrong");
//     }, 500);
//     setTimeout(function () {
//       arr2.lastChild.classList.add("wrong");
//     }, 500);
//     setTimeout(function () {
//       arr1.lastChild.classList.remove("wrong");
//     }, 1300);
//     setTimeout(function () {
//       arr2.lastChild.classList.remove("wrong");
//     }, 1300);
//     setTimeout(function () {
//       arr1.classList.toggle("flip");
//     }, 1000);
//     setTimeout(function () {
//       arr2.classList.toggle("flip");
//     }, 1000);
//   }
//   matches = [];
// }

// // starts the timer up
// function setTimer() {
//   if (timer == false) {
//     timer = true;
//     let start = Date.now();
//     setInterval(function () {
//       time = Date.now() - start;
//     }, 1000);
//   }
// }

// function finalTime(totalSecs) {
//   let hours = Math.floor(totalSecs / 3600);
//   totalSecs %= 3600;
//   let min = Math.floor(totalSecs / 60);
//   let secs = totalSecs % 60;

//   min = String(min).padStart(2, "0");
//   hours = String(hours).padStart(2, "0");
//   secs = String(secs).padStart(2, "0");
//   return `${hours}:${min}:${secs}`;
// }

// // increments the moves number when a card is selected, changes star rating
// function moveUp() {
//   let moves = document.getElementById("moves");
//   // console.log('moves: ', moves.innerHTML);
//   moves.innerHTML = parseFloat(moves.innerHTML) + 1;
//   // console.log('after moves: ', moves.innerHTML);
//   if (parseFloat(moves.innerHTML) > 30) {
//     document.getElementById("third").innerHTML = '<i class="far fa-star"></i>';
//   }
//   if (parseFloat(moves.innerHTML) > 40) {
//     document.getElementById("second").innerHTML = '<i class="far fa-star"></i>';
//   }
//   if (parseFloat(moves.innerHTML) > 50) {
//     document.getElementById("first").innerHTML = '<i class="far fa-star"></i>';
//   }
// }

// // makes modal visible when the player wins the game
// function win() {
//   let final = finalTime(Math.floor(time / 1000));
//   let modal = document.getElementById("modalWin");
//   let first = document.getElementById("first").innerHTML;
//   let second = document.getElementById("second").innerHTML;
//   let third = document.getElementById("third").innerHTML;
//   document.getElementById(
//     "modal-content"
//   ).innerHTML = `<p><strong>you win!</strong></p>
//     <p> star rating: ${first}${second}${third}</p>
//     <p> score: ${parseFloat(document.getElementById("moves").innerHTML) + 1}</p>
//     <p> time: ${final}</p>`;

//   modal.style.display = "block";
// }

// const Game = () => {
//   useEffect(() => {
//     display(cards);
//   }, []);
//   return (
//     <div className={`game`}>
//       <h1>Game</h1>
//       <div className={`board`}>
//         <div class="container">
//           <header>
//             <h1>matching game</h1>
//           </header>

//           <section className="score-panel">
//             <div id="movescore">
//               <ul class="stars">
//                 <li id="first">
//                   <i className="fas fa-star"></i>
//                 </li>
//                 <li id="second">
//                   <i className="fas fa-star"></i>
//                 </li>
//                 <li id="third">
//                   <i className="fas fa-star"></i>
//                 </li>
//               </ul>
//               <span id="moves">0</span> moves
//             </div>
//             <div id="restart">
//               <i className="fas fa-undo"></i>
//             </div>
//           </section>

//           <div id="deck" className="deck"></div>
//         </div>

//         <div id="modalWin" className="modal">
//           <div id="modal-content"></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Game;

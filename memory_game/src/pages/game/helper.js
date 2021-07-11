import {
  faGem,
  faPaperPlane,
  faAnchor,
  faBolt,
  faLeaf,
  faBicycle,
  faBomb,
  faFeather,
  faCar,
  faStar,
} from "@fortawesome/fontawesome-free-solid";

const iconsArray = [
  faGem,
  faPaperPlane,
  faAnchor,
  faBolt,
  faLeaf,
  faBicycle,
  faBomb,
  faFeather,
  faCar,
  faStar,
];

export const generateCards = (maxNumberOfPairs) => {
  let cards = [];
  for (let i = 0; i < maxNumberOfPairs * 2; i += 2) {
    cards.push({
      id: i,
      rel: i + 1,
      flipped: false,
      icon: iconsArray[i / 2],
      discovered: false,
    });
    cards.push({
      id: i + 1,
      rel: i,
      flipped: false,
      icon: iconsArray[i / 2],
      discovered: false,
    });
  }
  return shuffle(cards);
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    temp,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};

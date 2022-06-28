const { BadRequestError } = require("../utils/errors.js");

function getRandomInt(topnum) {
  return Math.floor(Math.random() * (topnum + 1));
}
function shuffle(array) {
  let currIndex = array.length,
    randomIndex;

  while (currIndex != 0) {
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex--;

    [array[currIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currIndex],
    ];
  }

  return array;
}
class GiftExchange {
  static pairs(names) {
    if (names.length % 2 == 1)
      throw new BadRequestError("Number of names cannot be odd");
    var aaray = [];
    var originLength = names.length;
    for (let i = 0; i < originLength / 2; i++) {
      let index1 = getRandomInt(names.length - 1);
      let name1 = names[index1];
      names.splice(index1, 1);

      let index2 = getRandomInt(names.length - 1);
      let name2 = names[index2];
      names.splice(index2, 1);

      aaray.push([name1, name2]);
    }

    return aaray;
  }

  static traditional(names) {
    let shuffling = shuffle(names);
    console.log("out");

    let response = [];

    for (let i = 0; i < names.length; i++) {
      if (i == names.length - 1) {
        response.push(`${shuffling[i]} is giving a gift to ${shuffling[0]}`);
        break;
      }

      response.push(`${shuffling[i]} is giving a gift to ${shuffling[i + 1]}`);
    }

    return response;
  }
}

module.exports = GiftExchange;

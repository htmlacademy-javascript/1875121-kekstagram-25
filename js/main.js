function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomInt(0, 10);


function checkStringLength(commentLenght, maxLenght) {
  return commentLenght <= maxLenght;
}

checkStringLength(120, 140);

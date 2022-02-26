function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomInt(0, 10);


function checkStringLength(commentLenght, maxLenght) {
  if(commentLenght <= maxLenght) {
    return true;
  }
  return false;
}

checkStringLength();

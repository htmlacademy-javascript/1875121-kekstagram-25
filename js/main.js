function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomInt(0, 10);


function checkStringLength(string, maxLenght) {
  return string.length < maxLenght;
}

checkStringLength('some string', 140);

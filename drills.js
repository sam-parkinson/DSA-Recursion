function countingSheep(int) {
  if (int === 0) {
    return ('All sheep jumped over the fence')
  } else {
    return (
      `${int}: Another sheep jumps over the fence
      ${countingSheep(int - 1)}`
    )
  }
}

function powerCalculator(base, exp) {
  if (exp < 0) {
    return 'exponent should be >= 0';
  } else if (exp === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, exp - 1)
  }
}

function reverseString(string) {
  if (string.length === 0) {
    return 'no string provided'
  } else if (string.length === 1) {
    return string
  } else {
    return string.slice(-1) + reverseString(string.slice(0, -1))
  }
}

function nthTriangularNumber(num) {}

function stringSplitter(string, char) {}

function fibonacci(num) {}

function exitMaze(maze) {}

function findAllExits(maze) {}

function anagrams(string) {}

function orgChart(org) {}

function binaryRepresentation(num) {}

module.exports = {
  countingSheep, 
  powerCalculator,
  reverseString
}

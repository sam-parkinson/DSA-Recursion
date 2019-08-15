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

function nthTriangularNumber(num) {
  if (num < 0) {
    return 'Please enter number greater than or equal to 0'
  } else if (num === 0) {
    return 0
  } else {
    return num + nthTriangularNumber(num - 1)
  }
}

function stringSplitter(string, char) {
  if (string.length === 1 && string.charAt().valueOf() != char) {
    return string
  } else if (string.length === 1) {
    return ''
  } else if (string.charAt().valueOf() === char) {
    return stringSplitter(string.slice(1))
  } else {
    return string.charAt() + stringSplitter(string.slice(1), char)
  }
}

// come back to this -- not removing matching char at last position

function fibonacci(num) {
  if (num < 1) {
    return 'Please enter a posiive integer'
  } else if (num === 1 || num === 2) {
    return 1
  } else return num + fibonacci(num)
}

// fix this -- should print sequence of numbers

function factorial(num) {
  if (num < 1) {
    return 'Please enter a positive integer'
  } else if (num === 1) {
    return 1
  } else return num * factorial(num - 1)
}

function exitMaze(maze) {}

function findAllExits(maze) {}

function anagrams(string) {}

function orgChart(org) {}

function binaryRepresentation(num) {}

module.exports = {
  countingSheep, 
  powerCalculator,
  reverseString,
  nthTriangularNumber,
  stringSplitter,
  fibonacci,
  factorial,
  exitMaze,
  findAllExits,
  anagrams,
  orgChart,
  binaryRepresentation
}

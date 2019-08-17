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
  } else return fibonacci(num - 2) + fibonacci(num - 1)
}

// fix this -- should print sequence of numbers

function factorial(num) {
  if (num < 1) {
    return 'Please enter a positive integer'
  } else if (num === 1) {
    return 1
  } else return num * factorial(num - 1)
}

function exitMaze(maze, position = [0, 0], path = '') {
  if (maze[position[0]][position[1]] === 'e') {
    return path
  } else if (maze[position[0]][position[1] + 1] && maze[position[0]][position[1] + 1] !== '*') {
    newPos = [position[0], position[1] + 1];
    newPath = path + 'R';
    maze[position[0]][position[1]] = '*';
    return exitMaze(maze, position = newPos, path = newPath)
  } else if (maze[position[0] + 1][position[1]] && maze[position[0] + 1][position[1]] !== '*') {
    newPos = [position[0] + 1, position[1]];
    newPath = path + 'D';
    maze[position[0]][position[1]] = '*';
    return exitMaze(maze, position = newPos, path = newPath)
  } else if (maze[position[0]][position[1] - 1] && maze[position[0]][position[1] - 1] !== '*') {
    newPos = [position[0], position[1] - 1];
    newPath = path + 'L';
    maze[position[0]][position[1]] = '*';
    return exitMaze(maze, position = newPos, path = newPath)
  } else {
    newPos = [position[0] - 1, position[1]];
    newPath = path + 'U';
    maze[position[0]][position[1]] = '*';
    return exitMaze(maze, position = newPos, path = newPath)  
  }
}

function findAllExits(maze, position = [0, 0], path = '') {

  const directions = []
  
  if (maze[position[0]][position[1] + 1] && maze[position[0]][position[1] + 1] !== '*') {
    newPos = [position[0], position[1] + 1];
    newPath = path + 'R';
    maze[position[0]][position[1]] = '*';
    directions.push({maze, newPos, newPath})
  } 

  if (maze[position[0] + 1][position[1]] && maze[position[0] + 1][position[1]] !== '*') {
    newPos = [position[0] + 1, position[1]];
    newPath = path + 'D';
    maze[position[0]][position[1]] = '*';
    directions.push({maze, newPos, newPath})
  } 
  
  if (maze[position[0]][position[1] - 1] && maze[position[0]][position[1] - 1] !== '*') {
    newPos = [position[0], position[1] - 1];
    newPath = path + 'L';
    maze[position[0]][position[1]] = '*';
    directions.push({maze, newPos, newPath})
  } 
  
  if (maze[position[0] - 1] && maze[position[0] - 1][position[1]] && maze[position[0] - 1][position[1]] !== '*') {
    newPos = [position[0] - 1, position[1]];
    newPath = path + 'U';
    maze[position[0]][position[1]] = '*';
    directions.push({maze, newPos, newPath})
  }
  
  for (let i = 0; i < directions.length; i++) {
    const { maze, newPos, newPath } = directions[i]

    if (maze[newPos[0]][newPos[1]] === 'e') {
      console.log('Path to the exit: ' + newPath);
    } else {
      findAllExits(maze, newPos, newPath)
    } 
  }

  // this currently gets one way out, needs to keep going until all paths have been found, working with 3 separate stacks of function cals
}

function anagrams(string) {
  // this will require the same sort of separate function calls logic as the previous one
}

function orgChart(org) {
  // as will this
}

function binaryRepresentation(num) {
  // I'll figure this one out later
}

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

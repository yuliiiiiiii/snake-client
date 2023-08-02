const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  stdin.on('data', handleUserInput)
  return stdin; //allow me to listen for keyboard unput and react to it - i can see what i did for my input
}

const handleUserInput = function(key) {
  if(key === '\u0003') { //check for the ctrl + C input and terminate the game
    process.exit();
  }
}

module.exports = setupInput;
//No need to export handleUserInput, because it is only called within this file.

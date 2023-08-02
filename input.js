let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  
  connection = conn;

  stdin.on('data', handleUserInput)
  return stdin; //allow me to listen for keyboard unput and react to it - i can see what i did for my input
}

const handleUserInput = function(key) {
  if(key === '\u0003') { //check for the ctrl + C input and terminate the game
    process.exit();
  }
  if(key === "w") {
    connection.write("Move: up");
  }
  if(key === "a") {
    connection.write("Move: left");
  }
  if(key === "s") {
    connection.write("Move: down");
  }
  if(key === "d") {
    connection.write("Move: right");
  }
}


module.exports = setupInput;
//No need to export handleUserInput, because it is only called within this file.

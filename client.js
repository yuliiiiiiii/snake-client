const net = require('net');

const { IP, PORT } = require('./constants');
//way to define two variables
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //create a connection with a server using ip and port
  conn.setEncoding('utf-8');
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write("Name: YLW");
  });
  
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });

  conn.on('data', data => {
    console.log(data);
  });
    
  return conn; //the connection i have with the server, allow me to interact with the server - see what i did
};

module.exports = connect;
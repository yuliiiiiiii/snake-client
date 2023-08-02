const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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
    
  return conn; //the connection i have with the server
};

module.exports = connect;
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\x77') {
    connection.write("Move: up")
  }
  if (key === '\x61') {
    connection.write("Move: left")
  }
  if (key === '\x73') {
    connection.write("Move: down")
  }
  if (key === '\x64') {
    connection.write("Move: right")
  }
  if (key === '\x71') {
    connection.write("Say: :3")
  }
  if (key === '\x65') {
    connection.write("Say: meow")
  }
};

module.exports = setupInput
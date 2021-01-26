const socket = require("socket.io");
const express = require("express");
const app = express();
const server = app.listen(3000, console.log("servidor abierto port 3000"));

const io = socket(server);

app.use(express.static(__dirname));

const serialport = require("serialport");
const readline = require("@serialport/parser-readline");
const port = new serialport("COM3", { baudRate: 9600 });

const parser = new readline();
port.pipe(parser);

parser.on("open", function name(params) {
  console.log("puerto abierto, Conectado con arduino");
});

parser.on("data", (data) => {
  console.log(data);
  io.emit("arduino:data", { value: data });
});

io.on("connection", (socket) => {
  console.log("Conectado nuevo usuario");
});


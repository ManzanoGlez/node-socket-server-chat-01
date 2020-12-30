const express = require("express");
const http = require("http");
const io = require("socket.io");
const path = require("path");
const { Socket } = require("dgram");
const Sockets = require("./Sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //create server
    this.server = http.createServer(this.app);
    //configure sockets
    this.io = io(this.server, {
      /*configurations*/
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configureSockets() {
    new Sockets(this.io);



  }

  execute() {
    this.middlewares();
    this.configureSockets();


    this.server.listen(this.port, () => {
      console.log(`Servidor activo en puerto: ${this.port}`);
    });
  }
}

module.exports = Server;

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
        socket.on("send-message-to-server", (payload) => {
          console.log(payload)
          this.io.emit("send-message-to-client", { msg: payload.msg });
        });
    });
  }
}

module.exports = Sockets;

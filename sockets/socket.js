
const {io} = require('../index');

// mensajes de sockets
io.on("connection", (client) => {
  console.log(`Client conectado!!`);

  client.on("disconnect", () => {
    console.log(`Client disconnected`);
  });

  client.on("mensaje", (payload) => {
    console.log(`Mensaje!!!! ${payload}`);
    io.emit("mensaje", { admin: "Nuevo mensaje" });
  });
});

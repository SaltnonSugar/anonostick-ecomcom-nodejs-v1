const app = require("./src/app");

const PORT = 3006;
const server = app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Exit server"));
});

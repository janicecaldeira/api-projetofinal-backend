require("dotenv").config();
const express = require("express");
const connectToDb = require("./src/database/database");
const routes = require("./src/routes/routes");
var cors = require("cors");

connectToDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(routes);

app.all("*", function (req, res) {
  res.status(404).send({ message: "Endpoint was not found" });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

app.listen(port, () =>
  console.info(`Servidor rodando em http://localhost:${port}`)
);

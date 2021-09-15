const routes = require("express").Router();

const CarroController = require("../controllers/CarrosController");
const CarroMiddleware = require("../middlewares/CarroMiddlewares");

routes.get("/carros", CarroController.getAll);
routes.get("/carros/:id", CarroMiddleware.validaID, CarroController.getById);
routes.post("/carros", CarroController.create);
routes.put("/carros/:id", CarroMiddleware.validaID, CarroController.update);
routes.delete("/carros/:id", CarroMiddleware.validaID, CarroController.del);
routes.get("/filterAll", CarroController.filterAll);

module.exports = routes;

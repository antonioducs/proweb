const express = require("express");
const routes = express.Router();
const CurriculoController = require("./controllers/CurriculoController");
const ImgPerfilController = require("./controllers/ImgPerfilController");
const ListsController = require("./controllers/ListsController");
const HabilidadeController = require("./controllers/HabilidadeController");
const ProjetoController = require("./controllers/ProjetoController");
const InfoController = require("./controllers/InfoController");
const BlogController = require("./controllers/BlogController");
const ContatoController = require("./controllers/ContatoController");

routes.get("/curriculo", CurriculoController.index);
routes.post("/curriculo", CurriculoController.store);
routes.get("/curriculo/:id", CurriculoController.show);
routes.put("/curriculo/:id", CurriculoController.update);
routes.delete("/curriculo/:id", CurriculoController.delete);

routes.get("/imgPerfil", ImgPerfilController.index);
routes.post("/imgPerfil", ImgPerfilController.store);
routes.get("/imgPerfil/:id", ImgPerfilController.show);
routes.put("/imgPerfil/:id", ImgPerfilController.update);
routes.delete("/imgPerfil/:id", ImgPerfilController.delete);

routes.get("/lists", ListsController.index);
routes.post("/lists", ListsController.store);
routes.get("/lists/:id", ListsController.show);
routes.put("/lists/:id", ListsController.update);
routes.delete("/lists/:id", ListsController.delete);

routes.get("/habilidades", HabilidadeController.index);
routes.post("/habilidades", HabilidadeController.store);
routes.get("/habilidades/:id", HabilidadeController.show);
routes.put("/habilidades/:id", HabilidadeController.update);
routes.delete("/habilidades/:id", HabilidadeController.delete);

routes.get("/projetos", ProjetoController.index);
routes.post("/projetos", ProjetoController.store);
routes.get("/projetos/:id", ProjetoController.show);
routes.put("/projetos/:id", ProjetoController.update);
routes.delete("/projetos/:id", ProjetoController.delete);

routes.get("/infos", InfoController.index);
routes.post("/infos", InfoController.store);
routes.get("/infos/:id", InfoController.show);
routes.put("/infos/:id", InfoController.update);
routes.delete("/infos/:id", InfoController.delete);

routes.get("/blogs", BlogController.index);
routes.post("/blogs", BlogController.store);
routes.get("/blogs/:id", BlogController.show);
routes.put("/blogs/:id", BlogController.update);
routes.delete("/blogs/:id", BlogController.delete);

routes.get("/contatos", ContatoController.index);
routes.post("/contatos", ContatoController.store);
routes.get("/contatos/:id", ContatoController.show);
routes.put("/contatos/:id", ContatoController.update);
routes.delete("/contatos/:id", ContatoController.delete);

module.exports = routes;
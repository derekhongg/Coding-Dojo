const TeamController = require("../controllers/team.controller");

module.exports = (app) => {
    app.get("/api/team", TeamController.findAllPlayers);
    app.post("/api/team", TeamController.createNewPlayer);
    app.get("/api/team/:id", TeamController.findOnePlayer);
    app.put("/api/team/:id", TeamController.updatePlayer);
    app.delete("/api/team/:id", TeamController.deletePlayer);
};
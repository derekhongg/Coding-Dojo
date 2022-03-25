const express = require('express');
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokesRoutes = require("./server/routes/jokes.routes")
AllJokesRoutes(app);

app.listen(8000, () => console.log(`Express is running on port ${port}`));
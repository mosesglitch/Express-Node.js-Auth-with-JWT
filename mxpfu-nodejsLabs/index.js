const express = require("express");
const routes = require("./routes/users.js");

const app = express();
const PORT = 5000;
// Observe that the express app uses the middleware express.json() to handle the request as a json object.
app.use(express.json());
// Observe that the express app uses routes to handle the endpoints which start with /user. This means that for all the endpoints starting with /user, the server will go and look for an endpoint handler in users.js.
app.use("/user", routes);

app.listen(PORT, () => console.log("Server is running at port " + PORT));

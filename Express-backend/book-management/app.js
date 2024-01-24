const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.route");
const allRoutes = require("./routes");

require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.use(express.json());
app.use(allRoutes);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

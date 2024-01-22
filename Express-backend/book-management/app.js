const express = require("express");
const app = express();

const allRoutes = require("./routes");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(allRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const { homePageRoute } = require("./src/routes/page-routes");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hey there!");
// });

app.use(homePageRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

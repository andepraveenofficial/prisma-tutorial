const express = require("express");
const dotenv = require("dotenv");

const UserRoutes = require("./src/routes/user.route");
dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// 00 Test
app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.use("/api/user", UserRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

const express = require("express");
const app = express();
const colors = require("colors");
const userRoute = require("./routes/user.route");

// CONFIG ENV FILE
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

// connected to db
const connectedDB = require("./db/connect");
connectedDB();

// middleware
app.use(express.json());
app.use("/api/users", userRoute);

// listen app
app.listen(PORT, (req, res) => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

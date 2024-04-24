const express = require("express");
const config = require("./constants/config");
const indexRouter = require("./routes/index");
const path = require("path");

//app initialization
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static("public"));

//middleware
app.use((req, res, next) => {
  console.log("I am middle ware run for ", req.url);
  next();
});

//routes
app.use("/", indexRouter);

// start server
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});

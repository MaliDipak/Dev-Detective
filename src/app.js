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

// Error handling middleware
app.use((err, req, res, next) => {
  // Set the status code to 500 (Internal Server Error)
  res.status(500);
  // Render the error page with the error message
  res.render("error", { message: err.message });
  next();
});

// start server
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});

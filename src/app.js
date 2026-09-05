const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yaml");
const fs = require("fs");
const path = require("path");

const router = require("./routes");
// const { notfound} = require("./middleware/notfound.middleware");
// const { errorHandler } = require("./middleware/errorHandler.middleware");

const app = express();

/* Security */

app.use(cors());
app.use(helmet());

/* Request Parsing */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Logging */

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

/* Swagger Documentation */

const swaggerDocument = YAML.parse(
  fs.readFileSync(
    path.join(__dirname, "docs", "swagger.yaml"),
    "utf8"
  )
);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

/* Health Check */

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
    message: "API is running",
  });
});

/* API Routes */

app.use("/api", router);

// /* 404 Handler */

// app.use(notfound);

// /* Global Error Handler */

// app.use(errorHandler);

module.exports = app;
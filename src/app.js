const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
const router = require('./routes');
const { notFound, errorHandler } = require('./middleware/error.middleware');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

const swaggerDocument = YAML.parse(
  fs.readFileSync(path.join(__dirname, 'docs', 'swagger.yaml'), 'utf8')
);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api', router);
app.use(notFound);
app.use(errorHandler);

module.exports = app;

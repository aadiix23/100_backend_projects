const express = require('express');
const converterRoutes = require('./Src/routes/convertor.routes');
const errorHandler   = require('./Src/middleware/errorHandler');

const app = express();
app.use(express.json());
app.use('/api/v1', converterRoutes);
app.use(errorHandler);

module.exports = app;

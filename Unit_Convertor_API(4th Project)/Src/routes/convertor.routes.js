const express = require("express");
const router = express.Router();
const ctrl = require('../controller/convert.controller.js');
const { validate } = require('../middleware/validate');

router.get('/convert', validate, ctrl.convert);
router.get('/categories', ctrl.categories);
router.get('/units/:cat', ctrl.units);

module.exports = router;

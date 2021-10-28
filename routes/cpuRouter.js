const { Router } = require('express');
const { cpuController } = require('./../controllers');

const cpuRouter = Router();

cpuRouter.get('/', cpuController.getCPUs);

module.exports = cpuRouter;

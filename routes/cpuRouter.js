const { Router } = require('express');
const { cpuController } = require('./../controllers');

const cpuRouter = Router();

cpuRouter.get('/', cpuRouter.getCPUs);

module.exports = cpuRouter;

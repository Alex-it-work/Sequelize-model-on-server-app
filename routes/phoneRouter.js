const { Router } = require('express');
const { userController } = require('../controllers');
const phoneRouter = Router();

phoneRouter.get('/', userController.getPhones);
phoneRouter.get('/:phoneId', userController.getPhoneById);
phoneRouter.post('/', userController.postPhone);
phoneRouter.patch('/:phoneId', userController.patchPhone);
phoneRouter.put('/:phoneId', userController.putPhone);
phoneRouter.delete('/:phoneId', userController.deletePhone);

module.exports = phoneRouter;

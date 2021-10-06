const { Router } = require('express');
const phoneController = require('../controllers/phone.controller');
const phoneRouter = Router();

phoneRouter.get('/', phoneController.getPhones);
phoneRouter.get('/:phoneId', phoneController.getPhoneById);
phoneRouter.post('/', phoneController.postPhone);
phoneRouter.patch('/:phoneId', phoneController.patchPhone);
phoneRouter.put('/:phoneId', phoneController.putPhone);
phoneRouter.delete('/:phoneId', phoneController.deletePhone);

module.exports = phoneRouter;

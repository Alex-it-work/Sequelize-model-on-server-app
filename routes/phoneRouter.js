const { Router } = require('express');

const phoneRouter = Router();

phoneRouter.get('/');
phoneRouter.get('/:phoneId');
phoneRouter.post('/');
phoneRouter.patch('/:phoneId');
phoneRouter.put('/:phoneId');
phoneRouter.delete('/:phoneId');

module.exports = phoneRouter;

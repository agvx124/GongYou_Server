const Router = require('koa-router');
const fileCtrl = require('./file.ctrl');

const fileRouter = new Router();

// authRouter.post('/login', fileCtrl.postLogin);
// authRouter.post('/register', fileCtrl.postRegister);
// authRouter.put('/pwchange', authCtrl.putPwChange);

module.exports = fileRouter;
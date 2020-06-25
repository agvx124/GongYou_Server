const Router = require('koa-router');
const fileCtrl = require('./upload.ctrl');

const fileRouter = new Router();

fileRouter.post('/urlUpload', fileCtrl.urlUpload);
fileRouter.get('/getFiles/:fileEigenValue', fileCtrl.getFiles);

module.exports = fileRouter;
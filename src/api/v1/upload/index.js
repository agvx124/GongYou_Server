const Router = require('koa-router');
const fileCtrl = require('./upload.ctrl');

const fileRouter = new Router();

fileRouter.post('/urlUpload', fileCtrl.urlUpload);

module.exports = fileRouter;
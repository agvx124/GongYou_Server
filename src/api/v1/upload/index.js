const Router = require('koa-router');
const multer = require('@koa/multer');
const fileCtrl = require('./upload.ctrl');

// MAX = 5MB, IMAGE
const imageUpload = multer({dest: 'upload/image', limits: {fileSize: 5 * 1024 * 1024}});
// MAX = 30MB, VIDEO
const videoUpload = multer({dest: 'upload/video', limits: {fileSize: 30 * 1024 * 1024}});
// MAX = 10MB, AUDIO
const audioUpload = multer({dest: 'upload/audio', limits: {fileSize: 10 * 1024 * 1024}});
// MAX = 10MB, Normal Files (문서)
const fileUpload = multer({dest: 'upload/file', limits: {fileSize: 10 * 1024 * 1024}});

const fileRouter = new Router();

fileRouter.post('/imageUpload', imageUpload.array('img', 9), fileCtrl.postImageUpload);
fileRouter.post('/videoUpload', videoUpload.array('video', 9), fileCtrl.postVideoUpload);
fileRouter.post('/audioUpload', audioUpload.array('audio', 9), fileCtrl.postAudioUpload);
fileRouter.post('/fileUpload', fileUpload.array('file', 9), fileCtrl.postFileUpload);

module.exports = fileRouter;
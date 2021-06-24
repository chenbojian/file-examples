const express = require('express');
const { uploadService, multerUpload } = require('../services/uploadService');

const router = express.Router();

/* GET home page. */
router.get('/', uploadService.render);
router.get('/chunk/exist', uploadService.chunkExist);
router.get('/file/exist', uploadService.fileExist);
router.post('/upload', multerUpload.any(), uploadService.uploadChunk);
router.post('/makefile', uploadService.makeFile);
router.get('/copyfile', uploadService.copyFile);

module.exports = router;

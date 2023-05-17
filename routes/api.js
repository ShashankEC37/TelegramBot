// api.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/telegramController');

router.post('/randomwiki', controller.postRandomWiki);

module.exports = router;

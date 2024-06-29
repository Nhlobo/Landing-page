const express = require('express');
const { getRewards } = require('../controllers/rewardController');
const router = express.Router();

router.get('/', getRewards);

module.exports = router;

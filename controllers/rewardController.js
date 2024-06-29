const Reward = require('../models/Reward');

exports.getRewards = async (req, res) => {
    try {
        const rewards = await Reward.find();
        res.status(200).json({ rewards });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch rewards' });
    }
};

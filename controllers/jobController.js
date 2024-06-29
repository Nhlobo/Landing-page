const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ jobs });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
};

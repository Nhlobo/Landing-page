import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobList.css';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/jobs');
                setJobs(response.data.jobs);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="joblist-container">
            <h1 className="joblist-title">Job Listings</h1>
            <ul className="joblist-items">
                {jobs.map(job => (
                    <li key={job.id}>{job.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default JobList;

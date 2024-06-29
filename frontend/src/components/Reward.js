import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reward.css';

function Reward() {
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const response = await axios.get('/rewards');
                setRewards(response.data.rewards);
            } catch (error) {
                console.error('Error fetching rewards:', error);
            }
        };

        fetchRewards();
    }, []);

    return (
        <div className="reward-container">
            <h1 className="reward-title">Rewards</h1>
            <ul className="reward-items">
                {rewards.map(reward => (
                    <li key={reward.id}>{reward.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Reward;

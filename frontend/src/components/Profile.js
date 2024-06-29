import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/users/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfile(response.data.user);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-info">Username: {profile.username}</div>
        </div>
    );
}

export default Profile;

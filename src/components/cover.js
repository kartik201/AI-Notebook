import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cover.css';

const CoverPage = () => {
    const navigate = useNavigate();


    const navigateToNextSection = () => {
        navigate('/module1');
    };

    return (
        <div className="cover-page">
            <div className="title">
                Social media in the age of AI
            </div>

            <div className="button-container" onClick={navigateToNextSection}>
                <div className="button-text">
                    Get Started
                </div>
            </div>
        </div>
    );
};

export default CoverPage;

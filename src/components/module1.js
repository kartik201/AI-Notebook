import React from 'react';
import { useNavigate } from 'react-router-dom';
import './module1.css';

const NextSection = () => {

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/module2');
    };
    return (
        <div className="next-section">
            <div className="header">
                Let's first see what our Prime Minister has to say about AI.
            </div>

            <div className="video-container">
                <iframe width="600" height="400" src="https://www.youtube.com/embed/FXGru0mWz_8?si=3O6jsXD7Rl3ydDLz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="exciting-text">
                Exciting, right? The Prime Minister himself explained AI!
            </div>

            <div className="wait-text">
                WAIT!!
            </div>

            <div className="gif-container">
                <img
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGNsOTlzdjBjMmhuZzM2ZHIxdW0zNXQzYzgxOXUxYWlyeGU2ZjJ0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lj4gGwQ4EN9Ejkts0a/giphy.webp" /* Replace with your GIF URL */
                    alt="Excited Reaction GIF"
                    className="exciting-gif"
                />
            </div>
            <div className="exciting-text">
                This is an AI generated video. Interesting right!
            </div>

            <button className="redirect-button" onClick={handleClick}>
                Deep dive
            </button>

        </div>
    );
};

export default NextSection;

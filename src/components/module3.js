import React from 'react';
import { useEffect } from 'react';
import './module3.css';
import { useNavigate } from 'react-router-dom';

const Module3 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="module3-container">
            <div className="header0">
                <h1>Types of Misinformation</h1>
            </div>

            <div className="content">
                <div className="misinfo-point">
                    <strong>Satire:</strong> <b>A piece of information that uses humor or exaggeration to critique or mock a person, organization, or policy.</b>
                    <img src="https://i.postimg.cc/1txN9D36/Screenshot-2024-12-12-at-11-16-08-PM.png" alt="Satire Example" className="misinfo-media" />
                </div>
                <div className="misinfo-point">
                    <strong>False Context:</strong> <b>Misinformation that takes an image, quote, or other content and puts it into a new, false context to change its meaning.</b>
                    <img src="https://i.postimg.cc/fbsNDLhy/Screenshot-2024-12-12-at-11-20-42-PM.png" alt="Satire Example" className="misinfo-media" />
                </div>
                <div className="misinfo-point">
                    <strong>Engagement Bait:</strong> <b>Social media content designed to get likes and shares using deceptive methods like false claims or fake images.</b>
                    <img src="https://i.postimg.cc/mZmprr7k/Screenshot-2024-12-13-at-12-09-36-AM.png" alt="Satire Example" className="misinfo-media" />
                </div>
                <div className="misinfo-point">
                    <strong>Imposter Content:</strong> <b>Misinformation that falsely uses a well-known name, brand, or logo to fool people.</b>
                    <img src="https://i.postimg.cc/ydYC3bxz/Screenshot-2024-12-12-at-11-25-52-PM.png" alt="Satire Example" className="misinfo-media" />
                </div>
                <div className="misinfo-point">
                    <strong>Manipulated Content:</strong> <b>Misinformation altered from the original, such as edited images or videos.</b>
                    <iframe className='misinfo-medias' width="560" height="315" src="https://www.youtube.com/embed/iyiOVUbsPcM?si=tkuYf0ZDJ7GHcPO9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="misinfo-point">
                    <strong>Fabricated Content:</strong> <b>Misinformation that is entirely made up and is designed to deceive you into thinking it’s real.</b>
                    <img src="https://i.postimg.cc/wM56hmzC/Screenshot-2024-12-12-at-11-58-07-PM.png" alt="Satire Example" className="misinfo-media" />
                </div>
            </div>

            <div className="interactive-section">
                <p>What do you think misinformation can lead to?</p>

                <div className="input-section">
                    <textarea
                        className="suggestion-input"
                        placeholder="Type your suggestion here..."
                        rows="4"
                        cols="50"
                    />
                    <button
                        className="send-button"
                        onClick={() => alert('Your suggestion has been submitted!')}
                    >
                        Send
                    </button>
                </div>
            </div>

            <div className="navigate-button">
                <button onClick={() => navigate('/module4')}>Move next</button>
            </div>
        </div>
    );
};

export default Module3;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './module2.css';

const Module2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    return (
        <div className="module2-container">
            <div className="header-section">
                <h1>Rule No. 1 → Never ever trust anything without verifying from an authentic source</h1>
            </div>

            <div className="content-section">
                <h2>How AI Powers Social Media:</h2>
                <ul className="ai-points">
                    <li><strong>1. Recommender System:</strong> A recommender system is a powerful tool used in AI to predict and suggest content tailored to your preferences, behaviors, and past interactions. It operates by analyzing vast amounts of data, such as your previous activity, the content you've engaged with, and the preferences of other users with similar profiles. This technology is widely used in platforms like social media, streaming services, and e-commerce sites to keep you engaged by offering personalized recommendations.</li>
                    <li><strong>2. Post Filtering:</strong> Post filtering is a crucial component of AI-driven moderation systems that aim to maintain the safety and quality of online platforms by identifying and removing harmful, inappropriate, or offensive content. As the internet grows and platforms host millions of posts daily, manual moderation becomes an impractical and overwhelming task. AI technology steps in to automate this process, ensuring that platforms remain safe, respectful, and conducive to positive user interactions.</li>
                    <li><strong>3. Simulation:</strong> Simulated experiences, such as virtual influencers and AI-generated content, are rapidly becoming a key aspect of the digital landscape, designed to engage users in increasingly immersive and interactive ways. These experiences leverage cutting-edge technologies like artificial intelligence (AI), machine learning, and virtual reality (VR) to create digital environments and personas that resonate with users, offering them personalized and captivating interactions.</li>
                    <li><strong>4. Digital Bots:</strong> AI bots, particularly those modeled after real or fictional personalities, are transforming the way users interact with digital systems, providing a level of personalization and engagement that was previously unimaginable. One fascinating application of this technology is the creation of simulated digital personas—such as a simulated digital version of former U.S. President Donald Trump—that can interact with users in real-time, delivering personalized messages, responding to queries, and even offering content that aligns with the persona’s characteristics and public persona.</li>
                    <li><strong>5. Sentiment Analysis:</strong> AI's ability to analyze user comments and feedback has become a crucial tool in understanding and shaping public opinion on various topics. By leveraging advanced technologies like natural language processing (NLP), sentiment analysis, and machine learning (ML) algorithms, AI can efficiently process large volumes of user-generated content to uncover insights about how people feel about specific issues, products, brands, or political events. This ability to interpret public sentiment and opinion has wide-ranging implications across industries, from marketing and customer service to politics and social research.</li>
                </ul>
            </div>
            <div className="navigate-button">
                <button onClick={() => navigate('/module5')}>Move next</button>
            </div>
        </div>
    );
};

export default Module2;

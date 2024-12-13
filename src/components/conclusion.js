import React, { useState } from "react";
import "./conclusion.css";

const ConclusionPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleFinishClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="conclusion-page">
            <div className="conclusion-content">
                <h1>The Final Step of Your Journey</h1>
                <p>
                    You’ve come a long way, exploring the fascinating world of Artificial Intelligence. Here's a recap of your incredible learning journey:
                </p>

                <section className="key-points">
                    <h2>Key Takeaways</h2>
                    <ul>
                        <li>
                            <strong>Understanding AI:</strong> Learned how Artificial Intelligence powers social media through recommendation systems, filters, and bots.
                        </li>
                        <li>
                            <strong>Critical Thinking:</strong> Realized the importance of verifying information from authentic sources in the age of AI and misinformation.
                        </li>
                        <li>
                            <strong>Ethical Awareness:</strong> Gained insight into the ethical implications of AI technologies and how to use them responsibly.
                        </li>
                        <li>
                            <strong>Problem-Solving:</strong> Developed a logical approach to understanding AI's impact on real-world scenarios with interactive examples.
                        </li>
                    </ul>
                </section>

                <section className="final-message">
                    <p>
                        We hope that the AI tools that we create will be used fairly and honestly, making sure that they don’t have a negative impact on society. We call this an “ethical” or responsible use of a tool.
                        🌟
                    </p>
                </section>

                <button className="finish-button" onClick={handleFinishClick}>
                    Finish
                </button>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Congratulations!🥳 Now you are a AI Champ!</h2>
                        <img
                            src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
                            alt="World Heavyweight Championship Celebration"
                            className="champ-gif"
                        />
                        <button className="close-button" onClick={handleClosePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConclusionPage;

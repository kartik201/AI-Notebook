import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const posts = [
    {
        id: 1,
        text: "Breaking News: Scientists discover water on Mars!",
        image: "https://i.postimg.cc/QC1DL1WC/Designer.jpg",
        truthfulness: true,
    },
    {
        id: 2,
        text: "Elon Musk announces a free Tesla giveaway.",
        image: "https://i.postimg.cc/8cJ577fg/elon-Musk-announces-new-tesla-giveaway.png",
        truthfulness: false,
    },
    {
        id: 3,
        text: "Study finds AI can predict earthquakes with 70% accuracy.",
        image: "https://i.postimg.cc/Jz1sq49Z/img3.webp",
        truthfulness: true,
    },
];

const SpotMisinformation = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleSelection = (isTrustworthy) => {
        const currentPost = posts[currentIndex];
        if (isTrustworthy === currentPost.truthfulness) {
            setScore((prev) => prev + 1);
            setFeedback("Correct!");
        } else {
            setFeedback("Oops, that's incorrect!");
        }

        setTimeout(() => {
            setFeedback("");
            if (currentIndex < posts.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else {
                setShowModal(true);
            }
        }, 1500);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentIndex(0);
        setScore(0);
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>

            <h1>Spot the Misinformation</h1>
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    margin: "20px auto",
                    maxWidth: "400px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                }}
            >
                <img
                    src={posts[currentIndex].image}
                    alt="Post"
                    style={{ width: "100%", borderRadius: "8px" }}
                />
                <p style={{ margin: "20px 0", fontSize: "18px" }}>
                    {posts[currentIndex].text}
                </p>
                <button
                    onClick={() => handleSelection(true)}
                    style={{
                        marginRight: "10px",
                        padding: "10px 20px",
                        border: "none",
                        backgroundColor: "#4caf50",
                        color: "white",
                        borderRadius: "5px",
                    }}
                >
                    Trust
                </button>
                <button
                    onClick={() => handleSelection(false)}
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        backgroundColor: "#f44336",
                        color: "white",
                        borderRadius: "5px",
                    }}
                >
                    Don't Trust
                </button>
            </div>
            <p style={{ fontWeight: "bold", color: "#ff5722" }}>{feedback}</p>

            {showModal && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            textAlign: "center",
                            maxWidth: "300px",
                        }}
                    >
                        <h2>Game Over!</h2>
                        <p>
                            Your score: <strong>{score}/{posts.length}</strong>
                        </p>
                        <button
                            onClick={closeModal}
                            style={{
                                marginTop: "20px",
                                padding: "10px 20px",
                                border: "none",
                                backgroundColor: "#4caf50",
                                color: "white",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}
            <div className="navigate-button">
                <button onClick={() => navigate('/module7')}>Move next</button>
            </div>
        </div>
    );
};

export default SpotMisinformation;

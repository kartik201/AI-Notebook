import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./module8.css";

const QuizWithAllQuestions = () => {

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/conclusion");
    };
    const [answers, setAnswers] = useState({}); // for answer traking

    const questions = [
        {
            question: "Q. What is misinformation?",
            options: ["False information", "True information", "Opinions", "None of the above"],
            correctOption: 0,
            explanation: "Misinformation is false information spread without the intent to deceive.",
        },
        {
            question: "Q. Which of the following is an example of engagement bait?",
            options: [
                "Breaking news shared by a credible source",
                "Posts asking users to like and share for fake rewards",
                "A scientific article verified by experts",
                "An educational video with proper citations"
            ],
            correctOption: 1,
            explanation: "Engagement bait tricks users into interacting with content, often using fake rewards or deceptive claims."
        },
        {
            question: "Q. What does manipulated content mean?",
            options: [
                "Content altered to mislead people",
                "Authentic content shared by a verified source",
                "Content edited for aesthetic purposes",
                "A meme created for fun"
            ],
            correctOption: 0,
            explanation: "Manipulated content is altered from its original form to mislead or deceive."
        },
        {
            question: "Q. What is imposter content?",
            options: [
                "Content that uses a false name or brand",
                "Content shared by a verified account",
                "Accurate content presented misleadingly",
                "A type of advertisement"
            ],
            correctOption: 0,
            explanation: "Imposter content involves using a false identity, name, or brand to mislead people."
        },
        {
            question: "Q. What is satire?",
            options: [
                "A humorous way to spread accurate information",
                "Content meant to critique through humor",
                "Accurate information that’s unintentionally funny",
                "A type of disinformation"
            ],
            correctOption: 1,
            explanation: "Satire uses humor or exaggeration to critique or mock people, organizations, or policies."
        },
        {
            id: 6,
            question: "Q. What does false context mean?",
            options: [
                "Using an authentic piece of content in a misleading way",
                "Creating a completely fake story",
                "Sharing an image with proper attribution",
                "Editing an image for aesthetic purposes"
            ],
            correctOption: 0,
            explanation: "False context takes real information and presents it in a misleading way."
        },
        {
            id: 7,
            question: "Q. What is fabricated content?",
            options: [
                "Content that is entirely made up",
                "Content that is edited for clarity",
                "Content that uses accurate data",
                "Content verified by experts"
            ],
            correctOption: 0,
            explanation: "Fabricated content is entirely false and created to deceive."
        },
        {
            id: 8,
            question: "Q. Why is it important to verify sources?",
            options: [
                "To ensure the content is entertaining",
                "To confirm the information’s credibility",
                "To increase likes and shares",
                "To follow popular trends"
            ],
            correctOption: 1,
            explanation: "Verifying sources helps confirm the accuracy and credibility of the information."
        },
        {
            id: 9,
            question: "Q. What is clickbait?",
            options: [
                "Accurate headlines that are informative",
                "Misleading headlines designed to attract clicks",
                "Educational content shared on social media",
                "Verified news articles"
            ],
            correctOption: 1,
            explanation: "Clickbait uses misleading or sensational headlines to attract clicks."
        },
        {
            id: 10,
            question: "Q. How can you identify credible sources?",
            options: [
                "By checking for a verified author and proper citations",
                "By checking how viral the content is",
                "By trusting content shared by friends",
                "By clicking on random links"
            ],
            answer: 0,
            explanation: "Credible sources typically have a verified author, proper citations, and evidence to support their claims."
        }
    ];

    const handleOptionClick = (questionIndex, optionIndex) => {
        setAnswers({
            ...answers,
            [questionIndex]: {
                selectedOption: optionIndex,
                isCorrect: optionIndex === questions[questionIndex].correctOption,
            },
        });
    };

    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <h1> ⏰ Quiz Time ⏰</h1>
                <p>Test what you have learned so far.</p>
            </header>
            <div className="quiz-questions">
                {questions.map((q, index) => (
                    <div key={index} className="quiz-question">
                        <h2>{q.question}</h2>
                        <div className="quiz-options">
                            {q.options.map((option, optIndex) => {
                                const isSelected = answers[index]?.selectedOption === optIndex;
                                const isCorrect = answers[index]?.isCorrect;
                                // const correctOption = q.correctOption;
                                const optionClass = isSelected
                                    ? isCorrect
                                        ? "option-correct"
                                        : "option-incorrect"
                                    : "";

                                return (
                                    <button
                                        key={optIndex}
                                        className={`quiz-option ${optionClass}`}
                                        onClick={() => handleOptionClick(index, optIndex)}
                                        disabled={answers[index]} // Disable options once answered
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        {answers[index] && (
                            <p className="quiz-explanation">
                                {answers[index].isCorrect ? "🎉 Correct!" : "❌ Incorrect."} {q.explanation}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <button className="next-button" onClick={handleNextClick}>
                Next
            </button>
        </div>
    );
};

export default QuizWithAllQuestions;

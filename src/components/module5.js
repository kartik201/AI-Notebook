import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useNavigate } from "react-router-dom";

const ItemType = {
    BLOCK: "block",
};

const Block = ({ text, id }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemType.BLOCK,
        item: { id, text },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: "10px 15px",
                margin: "10px",
                backgroundColor: "#4caf50",
                color: "white",
                cursor: "pointer",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            {text}
        </div>
    );
};

const DropArea = ({ onDrop, blocks }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemType.BLOCK,
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            style={{
                minHeight: "200px",
                padding: "20px",
                border: "2px dashed #ccc",
                borderRadius: "8px",
                backgroundColor: isOver ? "#f0f8ff" : "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            {blocks.length === 0 ? (
                <p style={{ color: "#aaa", fontStyle: "italic" }}>
                    Drag and drop blocks here to create your algorithm.
                </p>
            ) : (
                <ul>
                    {blocks.map((block, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            {block.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const DragAndDropAlgorithm = () => {
    const navigate = useNavigate();
    const [algorithm, setAlgorithm] = useState([]);
    const [testInput, setTestInput] = useState({
        text: "",
        likes: 0,
    });
    const [result, setResult] = useState("");

    const blocks = [
        { id: 1, text: "If a post has an image, Prioritize it" },
        { id: 2, text: "If a post has > 100 likes, Highlight it" },
        { id: 3, text: "If a post contains keywords like 'free' or 'offer', Flag it" },
        { id: 4, text: "If a post mentions politics, Filter it" },
    ];

    const handleDrop = (item) => {
        setAlgorithm((prev) => [...prev, item]);
    };

    const handleTest = () => {
        let output = "Post processed: ";
        algorithm.forEach((block) => {
            if (block.text.includes("image") && testInput.text.includes("image")) {
                output += "Prioritized | ";
            } else if (
                block.text.includes("> 100 likes") &&
                parseInt(testInput.likes, 10) > 100
            ) {
                output += "Highlighted | ";
            } else if (
                block.text.includes("keywords") &&
                /free|offer/.test(testInput.text)
            ) {
                output += "Flagged as Suspicious | ";
            } else if (
                block.text.includes("politics") &&
                testInput.text.includes("politics")
            ) {
                output += "Filtered Out | ";
            }
        });
        setResult(output || "No action performed.");
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>Build and Test Your Own Social Media Algorithm</h1>
                <p style={{ marginBottom: "30px", color: "#555" }}>
                    Lets learn how social media organizations use AI to Prioritize/Highlight their content for users.
                </p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                        style={{
                            width: "40%",
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            marginRight: "20px",
                        }}
                    >
                        <h3 style={{ marginBottom: "20px" }}>Available Blocks</h3>
                        {blocks.map((block) => (
                            <Block key={block.id} text={block.text} id={block.id} />
                        ))}
                    </div>
                    <div style={{ width: "50%" }}>
                        <h3 style={{ marginBottom: "20px" }}>Your Algorithm</h3>
                        <DropArea onDrop={handleDrop} blocks={algorithm} />
                    </div>
                </div>

                <div style={{ marginTop: "40px" }}>
                    <h2>Test Your Algorithm</h2>
                    <p style={{ marginBottom: "20px" }}>
                        Enter a sample post and test your algorithm:
                    </p>
                    <input
                        type="text"
                        placeholder="Post text (e.g., 'This post has an image')"
                        value={testInput.text}
                        onChange={(e) =>
                            setTestInput((prev) => ({ ...prev, text: e.target.value }))
                        }
                        style={{
                            padding: "10px",
                            marginBottom: "10px",
                            width: "60%",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Number of likes"
                        value={testInput.likes}
                        onChange={(e) =>
                            setTestInput((prev) => ({ ...prev, likes: e.target.value }))
                        }
                        style={{
                            padding: "10px",
                            marginBottom: "10px",
                            width: "60%",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <br />
                    <button
                        onClick={handleTest}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#4caf50",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Test Algorithm
                    </button>
                </div>

                {result && (
                    <div
                        style={{
                            marginTop: "20px",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <h3>Test Result</h3>
                        <p>{result}</p>
                    </div>
                )}
                <div className="navigate-button">
                    <button onClick={() => navigate('/module3')}>Move next</button>
                </div>
            </div>
        </DndProvider>
    );
};

export default DragAndDropAlgorithm;

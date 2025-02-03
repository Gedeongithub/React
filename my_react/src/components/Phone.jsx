import React, { useState} from "react";

function InputLogger() {
    const [text, setText] = useState("");

    // Event handler function that receives the event automatically
    const handleChange = (event) => {
        console.log("Event:", event); // Logs the full event object
        console.log("Target:", event.target); // Logs the input element
        console.log("Value:", event.target.value);
        setText(event.target.value);
    };
    console.log("Updated textt:", text);
    // useEffect(() => {
    //     console.log("Updated text:", text); // Logs AFTER the state is updated
    // }, [text]); 
    

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Type something:</h2>
            <input type="text" onChange={handleChange} />
            <p>Current Input: {text}</p>
        </div>
    );
}

export default InputLogger;

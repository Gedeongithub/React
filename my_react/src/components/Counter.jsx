import React, { useState } from 'react';

function Counter() {
    // Initialize state with 0
    const [count, setCount] = useState(0);

    // Function to increase count
    const increaseCount = () => {
        setCount(count + 1); // Increment count by 1
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' ,backgroundColor:'blue', width: '5cm', margin:'5cm'}}>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
        </div>
    );
}

export default Counter;

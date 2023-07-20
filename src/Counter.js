import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter-container">
            <h1>Simple React App</h1>
            <p>Count: {count}</p>
            {count > 15 && <span>“¡El conteo es demasiado alto!”</span>}
            <div className="actions">
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;

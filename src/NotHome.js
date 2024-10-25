// Posts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Header Component
function Header(props) {
    return (
    <div>
        <h2>{props.title}</h2>
    </div>
    );
}

// Counter Component
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has been updated to: ${count}`);
    }, [count]); 

    return (
        <div>
            <p><b>Counter: {count}</b></p>
            <CounterPass count={count} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

// CounterPass Component (renders the message when count > 5)
function CounterPass({ count }) {
    return (
        <div>
            {count > 5 && (
                <div>
                    <p><b>You Passed 5!</b></p>
                </div>
            )}
        </div>
    );
}


function App() {
    return (
        <div>
            <Header title="Not Home Page" />
            <Counter />
        </div>
    );
}
export default App;

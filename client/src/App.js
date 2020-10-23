
import './App.css';
import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

const App = () => {
    const [socket] = useState(() => io(":8000"));

    useEffect(() => {
        console.log("Is this running?");
        socket.on("welcome", data => console.log(data));

        return () => socket.disconnect(true);
    }, [socket]);
    return (
        <div className="App">
            <h1>Socket.io</h1>
        </div>
    )
};

export default App;

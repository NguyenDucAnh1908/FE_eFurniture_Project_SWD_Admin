import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // onSubmit({ username, password }); // Pass login credentials to parent component
    };
    return (
        <>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </div>
        </>
    )
}

export default Login

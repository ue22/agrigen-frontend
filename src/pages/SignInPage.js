import React, { useState } from 'react';
import '../styles/SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
      
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2>Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" id="email" placeholder="john.joe@gmail.com" 
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <button className="forgot-password-button">Forgot Password?</button>
            </div>
        </div>
    );
};

export default SignIn;

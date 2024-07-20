import React, { useState } from 'react';
import '../styles/SignIn.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();

    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2>Register</h2>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" id="email" placeholder="john.joe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="terms-container">
                        <input type="checkbox" id="terms" name="terms" required style="width: 17%;" />
                        <label htmlFor="terms" className="terms-label">Do you agree to terms and conditions?</label>
                    </div>
                    <button type="submit" className="login-button">Register</button>
                </form>
                <button className="forgot-password-button">Forgot Password?</button>
            </div>
        </div>
    );
};

export default Register;

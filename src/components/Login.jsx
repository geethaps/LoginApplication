import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import logo from './logo1.png'; // Import the logo image

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const validUsername = 'geetha';
        const validPassword = '123';

        // Check credentials
        if (username === validUsername && password === validPassword) {
            navigate('/employee', { state: { employeeName: username } });
        } else {
            navigate('/login-failed');
        }
    };

    return (
        <div>
            {/* Logo Image */}
            <img src={logo} alt="Company Logo" className="logo" />
            <div className="container">
                <h2 id='loginpage'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter user name'/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password '/>
                    </div>
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
}

export default Login;

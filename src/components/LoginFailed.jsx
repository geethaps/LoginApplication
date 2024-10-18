
import { useNavigate } from 'react-router-dom';

function LoginFailed() {
    const navigate = useNavigate();

    const handleRetryLogin = () => {
        navigate('/');
    };

    const handleGoToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div>
            <h2>Login Failed!</h2>
            <button onClick={handleRetryLogin}>Retry Login</button>
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
        </div>
    );
}

export default LoginFailed;

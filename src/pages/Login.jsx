import React, {useState} from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/API';

export const loader = ({ request }) => {
    return new URL(request.url).searchParams.get("message");
}

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const message = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setStatus('submitting');
        setError(null);

        loginUser(formData)
        .then(data => console.log(data))
        .then(navigate('/host'))
        .catch(error => setError(error.message))
        .finally(() => setStatus('idle'))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
  return (
    <div className="login-container">
        <h1>Sign in to your account</h1>
        {message && <h2>{message}</h2>}
        {error && <h2>{error}</h2>}
        <form onSubmit={handleSubmit} className='login-form'>
            <input name='email' type='email' value={formData.email} onChange={handleChange} placeholder='Email Address' />
            <input name='password' type='password' value={formData.password} onChange={handleChange} placeholder='Password' />
            <button disabled={status === 'submitting'}>
                {status === 'submitting' ? "Logging in..." : "Log In"}
            </button>
        </form>
    </div>
  )
}

export default Login;
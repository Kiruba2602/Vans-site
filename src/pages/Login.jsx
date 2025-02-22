import React from 'react';
import { useNavigate, Form, useLocation, redirect, useActionData, useNavigation } from 'react-router-dom';
import { loginUser } from '../api/API';

export const action = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect('/host')
    } catch (error) {
        return error.message
    }
}

const Login = () => {
    const navigate = useNavigate();
    const data = useActionData();
    const location = useLocation();
    const navigation = useNavigation();
    const from = location.state?.from || '/host';

    if(data?.token) {
        navigate(from , { replace: true })
    }

  return (
    <div className="login-container">
        { location.state?.message && 
            <h3 className='login-error'>{location.state.message}</h3>
        }
        <h1>Sign in to your account</h1>
        { data?.error && <h3 className='login-error'>{data.error}</h3> }
        <Form action='/login' method='post' className='login-form'>
            <input type='email' name='email' placeholder='Email address' />
            <br />
            <input type='password' name='password' placeholder='Password' />
            <br />
            <button disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? 'Logging in...' : 'Log in'}
            </button>
        </Form>
    </div>
  )
}

export default Login;
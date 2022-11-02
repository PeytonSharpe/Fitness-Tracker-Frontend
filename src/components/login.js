import React, { useState } from 'react';
import { loginUser } from '../api';

const Login = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async () => {
        const result = await loginUser(username, password);
        if (result.success) {
            setToken(result.data.token);
            window.localStorage.setItem('token', result.data.token);
            navigate('/routines');
        } else {
            window.alert('You must register before loggin in.')
            navigate('/register');
        }
    }
    return (
        <div>
            <h2>Please login to start your trackr!</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <input
                    type='text'
                    placeholder='Enter Username'
                    onChange={(event) => setUsername(event.target.value)} />
                <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={(event) => setPassword(event.target.value)} />
                <button type='submit'>Submit</button>
                
            </form>
        </div>
    )
}

export default Login;
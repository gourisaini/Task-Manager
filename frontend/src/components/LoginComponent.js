// LoginComponent.js
import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { TaskContext } from '../context/TaskProvider';

const LoginComponent = () => {

    const { setUser } = useContext(TaskContext)

    const onLoginSuccess = (res) => {
        const decoded = jwtDecode(res.credential);
        localStorage.setItem('user', JSON.stringify(decoded));
        setUser(decoded.sub)
    }

    const onLoginError = (res) => {
        console.log(res, "error")
    }

    return (
        <div className="h-80 flex items-center justify-center">
            <div className='bg-gray-50 w-4/12 h-6/12 flex flex-col items-center justify-center'>
                <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">TASK MANAGER</h1>
                <h2 className="my-6 text-center text-xl font-bold text-gray-900">Sign in to your account</h2>
                <div className='mb-6'>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </div>
            </div>
        </div>

    );
};

export default LoginComponent;

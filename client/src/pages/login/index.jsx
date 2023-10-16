import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginSplash } from '../../components/LoginSplash';

const initialValue = {
    email: '',
    password: '',
};

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialValue);
    const [error, setError] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/loginUser`, formData)
            .then((req, res) => {
                console.log('req', req);
                if (req.data.code === 'PASSWORD_ERR') {
                    return setPasswordErr(req.data);
                }
                setFormData(formData);

                navigate('/dashboard');
                // console.log("res", res);
            })
            .catch((err) => {
                console.log('error', err.response.data);
                setError(err.response.data);
            });
    };

    // DISPLAY USERS FOR TESTING
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:8000/api/users`)
    //         .then((res) => {
    //             console.log('response object', Array.isArray(res.data.users));
    //             setUsers(res.data.users);
    //         })
    //         .catch((e) => console.error('you did something wrong', e));
    // }, []);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="" id="auth">
                <div>
                    <h3>Log in</h3>
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={submitHandler}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                name="email"
                                type="text"
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={changeHandler}
                                type="password"
                                placeholder="******************"
                            />

                            {passwordErr.code === 'PASSWORD_ERR' ? (
                                <span style={{ color: 'red' }}>
                                    {passwordErr.message}
                                </span>
                            ) : null}
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Sign In
                            </button>
                            <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>

                <div className="" id="auth-spashpage">
                    <img src="{LoginSplash}" alt="" />
                </div>
            </div>
            <div className="" id="auth-spashpage">
                {/* <img src="{'LoginSplash'}" alt="" /> */}
                <LoginSplash />
            </div>
        </>
    );
};

export default Login;

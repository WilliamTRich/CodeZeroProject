import React, { useState } from 'react';

const Login = () => {
    const [register, setRegister] = useState(false);
    return (
        <>
            {!register ? (
                <div>
                    <h3>Log in</h3>
                    <form action="">
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" />
                        </div>
                        <button>submit</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h3>Register</h3>
                    <form action="">
                        <div>
                            <label htmlFor="first_name">first name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="last_name">last name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" />
                        </div>
                        <div>
                            <label htmlFor="confirm_password">
                                confirm password
                            </label>
                            <input type="password" />
                        </div>
                        <button>submit</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Login;

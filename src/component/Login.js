import '../css/login.css'
import {useState} from "react";
import login from "../api/loginApi"

const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const { username, password} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onClick = async () => {
        await login("/login",inputs).then((response) => {
           const {msg, data} =  response.data;
           console.log(response.data);
           if (msg === 'success') {
               localStorage.setItem('X-AUTH-TOKEN', data);
           } else {
               alert("ERROR");
           }
        });
    }



    return (
        <div>
            <div className="page-container">
                <div className="login-for   m-container shadow">
                    <div className="login-form-right-side">
                        <div className="top-logo-wrap">

                        </div>
                        <h1>How does a login system work?</h1>
                        <p>In computer security, logging in is the process by which an individual gains access to a computer
                            system by identifying and authenticating themselves.</p>
                    </div>
                    <div className="login-form-left-side">
                        <div className="login-top-wrap">
                            <span>Don't have an account?</span>
                            <button className="create-account-btn shadow-light">Create Profile</button>
                        </div>
                        <div className="login-input-container">
                            <div className="login-input-wrap input-id">
                                <i className="far fa-envelope"></i>
                                <input placeholder="username" onChange={onChange} value={username} name="username" type="text"/>
                            </div>
                            <div className="login-input-wrap input-password">
                                <i className="fas fa-key"></i>
                                <input placeholder="password" name="password" onChange={onChange} value={password} type="password"/>
                            </div>
                        </div>
                        <div className="login-btn-wrap">
                            <button className="login-btn" onClick={onClick}>Login</button>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default Login
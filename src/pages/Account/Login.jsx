import React, { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { loginUser } from '../../services/UserApi/UserApi'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Login = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate()

    const [valueLogin, setValueLogin] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidValuePassword: true,
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput)
        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false })
            toast.warning("Please enter your email or password");
            return;
        }
        if (!valuePassword) {
            setObjValidInput({ ...defaultObjValidInput, isValidValuePassword: false })
            toast.warning("Please enter your password");
        }
        let response = await loginUser(valueLogin, valuePassword);
        console.log("Check login", response);
        let role = response.user.role;
        if (response && response.staus === "Success" && role === "ADMIN") {
            let user = response.user;
            let tokenJwt = response.token;
            let data = {
                isAuthenticated: true,
                token: response.token,
                refesh_token: response.refesh_token,
                account: { user }
            }
            localStorage.setItem("account", JSON.stringify(data));
            localStorage.setItem("jwt", tokenJwt);
            login(data);
            navigate("/");
            // window.location.reload();
            // toast.success("Login Success");
        } else {
            toast.error("An error occurred during login")
        }
    }
    //console.log("Check: ", valueLogin)
    const handleLoginEmailChange = (event) => {
        setValueLogin(event.target.value);
    }

    const handleLoginPasswordChange = (event) => {
        setValuePassword(event.target.value);
    }

    return (
        <>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    value={valueLogin}
                    onChange={handleLoginEmailChange}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    value={valuePassword}
                    onChange={handleLoginPasswordChange}
                    required
                />
                <br />
                <button type="submit" onClick={() => handleLogin()}>Login</button>
            </div>
        </>
    )
}

export default Login

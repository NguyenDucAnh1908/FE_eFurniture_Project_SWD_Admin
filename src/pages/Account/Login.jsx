import React, { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { loginUser } from '../../services/UserApi/UserApi'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Login = (props) => {
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
        // let role = response.user.role;
        // && role === "ADMIN"
        if (response && response.staus === "Success" && response.role === "ADMIN"
         || response.role === "STAFF_DELIVERY" || response.role === "STAFF" || response.role === "DESIGNER"
        ) {
            let user = response.user;
            let tokenJwt = response.token;
            let data = {
                isAuthenticated: true,
                token: response.token,
                refesh_token: response.refesh_token,
                role: response.role,
                account: { user }
            }
            localStorage.setItem("account", JSON.stringify(data));
            localStorage.setItem("jwt", tokenJwt);
            login(data);
            navigate("/");
            // window.location.reload();
            toast.success("Login Success");
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
    useEffect(() => {
        let local = localStorage.getItem("account");
        if(local) {
            toast.warning("You do not have access!");
            navigate('/')
        };
    },[])

    return (
        <>
            {/* <div>
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
            </div> */}

            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f" />
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter" />
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in" />
                                    </button>
                                </div>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        value={valueLogin}
                                        onChange={handleLoginEmailChange}
                                        required
                                    />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={valuePassword}
                                        onChange={handleLoginPasswordChange}
                                        required
                                    />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                        onClick={() => handleLogin()}
                                    >Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login

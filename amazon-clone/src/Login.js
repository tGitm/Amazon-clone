import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            console.log(auth);
            if (auth) {
                history.push("/");
            }
        })
        .catch(error => alert(error.message));
        //Firebase login
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                history.push("/");
            }
        })
        .catch(error => alert(error.message));
        //Firebase registration
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"/>
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/> {/* ko bo uporabnik nekaj tipkal */}

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                Please see out Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
                </p>

                <button onClick={register}
                className="login_registerButton">Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
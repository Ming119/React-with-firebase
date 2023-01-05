import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((_userCredential) => {
            window.location.href = "/";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(`${errorCode}: ${errorMessage}`);
        });
    };

    return (
        <div>
        <form onSubmit={ handleSubmit }>
            <input
                type="text" placeholder="Email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
            />
            <input
                type="password" placeholder="Password"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
            />
            <input
                type="password" placeholder="Confirm Password"
                value={ confirmPassword }
                onChange={ (e) => setConfirmPassword(e.target.value) }
            />
            <button type="submit">Sign Up</button>
        </form>
        { error && <div>{ error }</div> }
        <div>Already have an account? <a href="/signin">Sign In</a> now.</div>
        </div>
    );
};

export default SignUp;

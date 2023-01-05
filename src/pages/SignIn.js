import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		setError(null);

		signInWithEmailAndPassword(auth, email, password)
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
		<Form onSubmit={ handleSubmit }>
			<Form.Group className="mb-3" controlId="formEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email" placeholder="Email"
					value={ email } onChange={ (e) => setEmail(e.target.value) }
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formPassword">
				<Form.Label>Password</Form.Label>
        <Form.Control
					type="password" placeholder="Password"
					value={ password } onChange={ (e) => setPassword(e.target.value) }
				/>
			</Form.Group>

			<Button variant="primary" type="submit">Sign In</Button>
		</Form>


	);
};

export default SignIn;
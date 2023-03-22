import React, { useState } from 'react';
import loginImg from '../../images/loginimg.jpeg';
import './Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let handleSubmit = async (e) => {
		e.preventDefault();
		const headers = { 'Content-Type': 'application/json' };

		try {
			let res = await fetch('http://127.0.0.1:5000/api/v1/login', {
				method: 'POST',
				headers: headers,
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});
			if (res.status === 200) {
				setEmail('');
				alert('User loggedin successfully');
				window.location.replace('/dashboard');
			} else {
				alert('Some error occured');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<div className='App'>
				<form onSubmit={handleSubmit}>
					<h1>Login to NerdsHub</h1>

					<input
						type='text'
						value={email}
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						value={password}
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type='submit'>Login</button>
				</form>
			</div>
			<div className='book-img'>
				<img src={loginImg} alt='' />
			</div>
		</div>
	);
};

export default Login;

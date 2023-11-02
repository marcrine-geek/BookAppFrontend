import React, { useState } from 'react';
import Navbarhome from '../../components/Navbar/Navbarhome';
// import loginImg from '../../images/loginimg.jpeg';
import './Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let handleSubmit = async (e) => {
		e.preventDefault();
		const headers = { 'Content-Type': 'application/json' };
		const data = {
			email: email,
			password: password,
		};
		console.log(data);

		await fetch('http://127.0.0.1:5000/api/v1/login', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				console.log(data.token);
				localStorage.setItem('token', data.token);
				console.log(
					'loginResponse',
					`localStorage set with token value: ${data.token}`
				);
				alert('User loggedin successfully');
				window.location.replace('/dashboard');
			})
			.catch(function (error) {
				console.log(
					'There has been a problem with your fetch operation: ' + error
				);
			});
	};

	return (
		<div>
			<Navbarhome />

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
			{/* <div className='book-img'>
				<img src={loginImg} alt='' />
			</div> */}
		</div>
	);
};

export default Login;

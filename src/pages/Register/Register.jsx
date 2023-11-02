import React, { useState } from 'react';
import Navbarhome from '../../components/Navbar/Navbarhome';
// import bookImg from '../../images/book.jpeg';
import './Register.css';

const Register = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let handleSubmit = async (e) => {
		e.preventDefault();
		const headers = { 'Content-Type': 'application/json' };

		try {
			let res = await fetch('http://127.0.0.1:5000/api/v1/register', {
				method: 'POST',
				// mode: 'no-cors',
				headers: headers,
				body: JSON.stringify({
					firstname: firstname,
					lastname: lastname,
					email: email,
					password: password,
				}),
			});
			if (res.status === 201) {
				setFirstname('');
				setLastname('');
				setEmail('');
				alert('User created successfully');
				window.location.replace('/login');
			} else {
				alert('Some error occured');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<Navbarhome />
			<div className='App'>
				<form onSubmit={handleSubmit}>
					<h1>Register to NerdsHub</h1>

					<input
						type='text'
						value={firstname}
						placeholder='FirstName'
						onChange={(e) => setFirstname(e.target.value)}
					/>
					<input
						type='text'
						value={lastname}
						placeholder='LastName'
						onChange={(e) => setLastname(e.target.value)}
					/>
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

					<button type='submit'>Register</button>
				</form>
			</div>
			{/* <div className='book-img'>
				<img src={bookImg} alt='' />
			</div> */}
		</div>
	);
};

export default Register;

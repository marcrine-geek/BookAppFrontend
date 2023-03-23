import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Library.css';

const Library = () => {
	const token = localStorage.token;

	const [book, setBook] = useState([]);
	const [data, setData] = useState([]);

	ReadBooks();
	ToReadBooks();

	async function ReadBooks() {
		await fetch('http://127.0.0.1:5000/api/v1/getreadbooks', {
			headers: new Headers({
				Authorization: `Bearer ${token}`,
			}),
		})
			.then((response) => response.json())
			.then((book) => {
				setBook(book.book);
			})
			.catch((err) => console.log(err));

		document.getElementById('tableone');
	}

	async function ToReadBooks() {
		await fetch('http://127.0.0.1:5000/api/v1/gettoreadbooks', {
			headers: new Headers({
				Authorization: `Bearer ${token}`,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data.data);
			})
			.catch((err) => console.log(err));

		document.getElementById('tabletwo');
	}

	return (
		<div className='holder'>
			<header className='header'>
				<Navbar />
			</header>
			<div className='librarytitle'>
				<h2>This is your library</h2>
			</div>
			<div className='data'>
				<div className='readb' id='tableone'>
					<h3>These are read books</h3>
					<table>
						<thead>
							<tr>
								<th>Book Titles</th>
							</tr>
						</thead>
						<tbody>
							{book.map((books, key) => (
								<tr key={key}>
									<td>{books.title}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='toread' id='tabletwo'>
					<h3>These are books to read</h3>
					<table>
						<thead>
							<tr>
								<th>Book Titles</th>
							</tr>
						</thead>
						<tbody>
							{data.map((datas, key) => (
								<tr key={key}>
									<td>{datas.title}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Library;

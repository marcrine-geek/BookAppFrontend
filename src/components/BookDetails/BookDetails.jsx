import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import coverImg from '../../images/cover_not_found.jpg';
import Loading from '../Loader/Loader';
import './BookDetails.css';

const URL = 'https://openlibrary.org/works/';

const BookDetails = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [book, setBook] = useState(null);
	const navigate = useNavigate();

	console.log('=====', id);
	useEffect(() => {
		setLoading(true);
		async function getBookDetails() {
			try {
				const response = await fetch(`${URL}${id}.json`);
				const data = await response.json();
				console.log(data);

				if (data) {
					const {
						description,
						title,
						covers,
						subject_places,
						subject_times,
						subjects,
					} = data;
					console.log('++++++++', data.description);

					const newBook = {
						description: description
							? description.value
							: 'No description found',
						title: title,
						cover_img: covers
							? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
							: coverImg,
						subject_places: subject_places
							? subject_places.join(', ')
							: 'No subject places found',
						subject_times: subject_times
							? subject_times.join(', ')
							: 'No subject times found',
						subjects: subjects ? subjects.join(', ') : 'No subjects found',
					};
					setBook(newBook);
				} else {
					setBook(null);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}
		getBookDetails();
	}, [id]);

	console.log('----------', id);

	// Add to read book
	async function handleClick() {
		console.log('============', id);
		const response = await fetch(`${URL}${id}.json`);
		const data = await response.json();
		console.log(data);

		console.log('**************', data.title);
		// console.log('**************', data.description.value);

		var title = data.title;
		// var description = data.description.value;

		const book = {
			title: title,
		};

		console.log('My new data to database________________', book);

		// const headers = { 'Content-Type': 'application/json' };

		const token = localStorage.token;

		console.log(token);

		fetch('http://127.0.0.1:5000/api/v1/read', {
			method: 'POST',
			// mode: 'no-cors',
			headers: new Headers({
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({
				title: title,
			}),
		})
			.then((response) => response.json())
			.then((book) => {
				console.log(book);
				alert('book uploaded successfully');
			})
			.catch((err) => console.log(err));
	}

	// Add to queue
	async function queueClick() {
		console.log('============', id);
		const response = await fetch(`${URL}${id}.json`);
		const data = await response.json();
		console.log(data);

		console.log('**************', data.title);

		var title = data.title;

		const mybook = {
			title: title,
		};

		console.log('My new data to database________________', mybook);

		// const headers = { 'Content-Type': 'application/json' };

		const token = localStorage.token;

		console.log(token);

		fetch('http://127.0.0.1:5000/api/v1/toread', {
			method: 'POST',
			// mode: 'no-cors',
			headers: new Headers({
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({
				title: title,
			}),
		})
			.then((response) => response.json())
			.then((mybook) => {
				console.log(mybook);
				alert('book added to queue successfully');
			})
			.catch((err) => console.log(err));
	}

	if (loading) return <Loading />;

	return (
		<section className='book-details'>
			<div className='container'>
				<button
					type='button'
					className='flex flex-c back-btn'
					onClick={() => navigate('/dashboard/book')}
				>
					<FaArrowLeft size={22} />
					<span className='fs-18 fw-6'>Go Back</span>
				</button>

				<div className='book-details-content grid'>
					<div className='book-details-img'>
						<img src={book?.cover_img} alt='cover img' />
					</div>
					<div className='book-details-info'>
						<div className='book-details-item title'>
							<span className='fw-6 fs-24'>{book?.title}</span>
						</div>
						<div className='book-details-item description'>
							<span>{book?.description}</span>
						</div>
						<div className='book-details-item'>
							<span className='fw-6'>Subject Places: </span>
							<span className='text-italic'>{book?.subject_places}</span>
						</div>
						<div className='book-details-item'>
							<span className='fw-6'>Subject Times: </span>
							<span className='text-italic'>{book?.subject_times}</span>
						</div>
						<div className='book-details-item'>
							<span className='fw-6'>Subjects: </span>
							<span>{book?.subjects}</span>
						</div>
						<div className='read'>
							<Button
								color='primary'
								variant='contained'
								size='large'
								style={{ fontSize: '20px', margin: '10px' }}
								onClick={handleClick}
							>
								Add to read
							</Button>

							<Button
								color='secondary'
								variant='contained'
								size='large'
								style={{ fontSize: '20px', margin: '10px' }}
								onClick={queueClick}
							>
								Add to queue
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookDetails;

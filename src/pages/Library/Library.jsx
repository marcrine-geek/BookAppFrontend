import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Library.css';

const Library = () => {
	return (
		<div className='holder'>
			<header className='header'>
				<Navbar />
			</header>
			<div className='librarytitle'>
				<h2>This is your library</h2>
			</div>
			<div className='data'>
				<div className='readb'>
					<h3>These are read books</h3>
				</div>
				<div className='toread'>
					<h3>These are book to read</h3>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Library;

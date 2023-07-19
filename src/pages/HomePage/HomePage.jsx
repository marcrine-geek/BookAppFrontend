import React from 'react';
import BookHome from '../../components/BookHome/BookHome';
import Footer from '../../components/Footer/Footer';
import Navbarhome from '../../components/Navbar/Navbarhome';
import About from '../About/About';

const HomePage = () => {
	return (
		<div className='holder'>
			<header className='header'>
				<Navbarhome />
				<div className='header-content flex flex-c text-center text-white'>
					<h2 className='header-title text-capitalize'>
						find and track your best book.
					</h2>
					<br />
					<p className='header-text fs-18 fw-3'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
						sapiente quibusdam consequatur perspiciatis facere laboriosam non
						nesciunt at id repudiandae, modi iste? Eligendi, rerum!
					</p>
				</div>
			</header>
			<BookHome />
			<About />
			<Footer />
		</div>
	);
};

export default HomePage;

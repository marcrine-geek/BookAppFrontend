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
						Track your reading progress.
					</h2>
					<br />
					<p className='header-text fs-18 fw-3'>
						React App CI/CD Pipeline Using AWS CodePipeline
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

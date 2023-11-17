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
					<h1 className='header-title text-capitalize'>
						BookApp Library.
					</h1>
					<br />
					<p className='header-text fs-18 fw-3'>
						<h3>This is a CI/CD Pipeline that uses github actions</h3>
						<h2 className='text-capitalize'><b>This is a success</b></h2>
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

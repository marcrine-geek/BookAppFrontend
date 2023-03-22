import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Home;

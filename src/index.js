import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails/BookDetails';
import BookList from './components/BookList/BookList';
import { AppProvider } from './context.';
import './index.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import HomePage from './pages/HomePage/HomePage';
import Library from './pages/Library/Library';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AppProvider>
		<BrowserRouter>
			<Routes>
				<Route path='dashboard' element={<Home />}>
					<Route path='about' element={<About />} />
					<Route path='book' element={<BookList />} />
				</Route>
				<Route path='/' element={<HomePage />} />
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='library' element={<Library />} />
				<Route path='book/:id' element={<BookDetails />} />
			</Routes>
		</BrowserRouter>
	</AppProvider>
);

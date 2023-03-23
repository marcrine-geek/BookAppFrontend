import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png';
import './Navbar.css';

const Navbarhome = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const handleNavbar = () => setToggleMenu(!toggleMenu);

	return (
		<nav className='navbar' id='navbar'>
			<div className='container navbar-content flex'>
				<div className='brand-and-toggler flex flex-sb'>
					<Link to='/' className='navbar-brand flex'>
						<img src={logoImg} alt='site logo' />
						<span className='text-uppercase fw-7 fs-24 ls-1'>nerdshub</span>
					</Link>
					<button
						type='button'
						className='navbar-toggler-btn'
						onClick={handleNavbar}
					>
						<HiOutlineMenuAlt3
							size={35}
							style={{
								color: `${toggleMenu ? '#fff' : '#010101'}`,
							}}
						/>
					</button>
				</div>

				<div
					className={
						toggleMenu
							? 'navbar-collapse show-navbar-collapse'
							: 'navbar-collapse'
					}
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link
								to='/'
								className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/'
								className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'
							>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/register'
								className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'
							>
								Register
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/login'
								className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'
							>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbarhome;

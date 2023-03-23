import { MDBBtn, MDBContainer, MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export default function App() {
	return (
		<MDBFooter
			className='text-center text-white'
			style={{ backgroundColor: '#953bd5' }}
		>
			<MDBContainer className='p-4 pb-0'>
				<section className=''>
					<p className='d-flex justify-content-center align-items-center'>
						<span className='me-3'>Register for free</span>
						<MDBBtn
							type='button'
							style={{
								background: '#953bd5',
								border: 'solid white',
								borderRadius: '10px',
								color: 'white',
								marginTop: '10px',
							}}
							outline
							color='light'
							rounded
						>
							Sign up!
						</MDBBtn>
					</p>
				</section>
			</MDBContainer>

			<div
				className='text-center p-3'
				style={{ backgroundColor: '#4f0585', height: '65px' }}
			>
				© 2023 Copyright:
				<a className='text-white' href='http://localhost:3000/'>
					NerdsHub
				</a>
			</div>
		</MDBFooter>
	);
}

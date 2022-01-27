import React from 'react';

const Header = () => {
	return (
		<>
			<div id='header'>
				<nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
					<div className='container'>
						<h1 className='navbar-brand'>Task From Maksud Vaiya</h1>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav ms-auto mb-2 mb-lg-0 text-light'>
								<li className='nav-item'>log Out</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Header;

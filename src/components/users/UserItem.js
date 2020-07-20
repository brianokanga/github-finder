import React from 'react';
import PropTypes from 'prop-types';

//   destructuring
const userItem = ({ user: { login, avatar_url, home_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				className='round-img'
				alt=''
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>
			<div>
				<a
					href={home_url}
					className='btn btn-dark btn-sm my-1'
					style={{ borderRadius: '5px' }}>
					More
				</a>
			</div>
		</div>
	);
};

userItem.prototype = {
	user: PropTypes.object.isRequired,
};

export default userItem;

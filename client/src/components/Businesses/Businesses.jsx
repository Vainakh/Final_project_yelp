import React from 'react';
// import './Businesses.css';
import Business from '../Business/Business.jsx';

class Businesses extends React.Component {
	render() {
		return (
			<div className="Businesses">
				{this.props.businesses.map((business) => {
					return <Business key={business.id} business={business} />;
				})}
			</div>
		);
	}
}

export default Businesses;
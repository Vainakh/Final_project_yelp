import React from 'react';
import './Business.css';

class Business extends React.Component {
	render() {
		const { business } = this.props;
		return (
			<div className="business">
				<div className="business-image-container">
					<img src={business.imageSrc} alt={business.name} />
				</div>
				<h2> {business.name} </h2>
				<div className="business-info">
					<div className="business-info-address">
						<p> {business.address} </p> <p> {business.city} </p>
						<p> {`${business.state} ${business.zipCode}`} </p>
					</div>
					<div className="business-info-reviews">
						<h3> {business.category} </h3> <h3 className="rating"> {`${business.rating} stars`}</h3>
						<p> {`${business.reviewCount} reviews`}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;
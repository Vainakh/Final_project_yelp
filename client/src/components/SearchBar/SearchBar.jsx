import React from 'react';
// import './SearchBar.css'; uncomment to see error

class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			term : "",
			location : "",
			sortBy : "best_match"
		};  //initial state
		
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		};
		// this.handleLocationChange = this.handleLocationChange.bind(this);
		// this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event){
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy); //props change the state values
		event.preventDefault();
		}

  render() {
		return (
			<div className="searchbar">
				<div className="SearchBar-fields">
					<input placeholder="Find" />
					<input placeholder="Near" />
				</div>
				<div className="SearchBar-submit">
					<a  onClick={this.handleSearch}>Let's Go</a>
				</div>
				{/* <div className="searchbar-nav">
					<div>Plumbers</div>
					<div>Restorants</div>
					<div>Home Services</div>
					<div>Deliveries</div>
				</div> */}
			</div>
		);
	}
}




export default SearchBar;
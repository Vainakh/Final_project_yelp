import React from 'react';
import './SearchBar.css';

// A SearchBar component
//https://www.yelp.com/developers/documentation/v3/business_search

class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			term : "",
			location : "",
			sortBy : "best_match"
		}; 
		
		this.sortByPreferences = {
			'Relevance': 'best_match',
			'Rating': 'rating',
			'Reviews': 'review_count'
		};
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	getSortByClass(sortByPreference){
		if (this.state.sortBy === sortByPreference){
			return 'active'; 
		}
		return "";
	}

	handleSortByChange(sortByPreference){
		this.setState({
			sortBy : sortByPreference
		});
	}

	handleTermChange(event){
		this.setState({
     term : event.target.value
		});
	}

	handleLocationChange(event){
		this.setState({
			location : event.target.value
		});
	}

	handleSearch(event){
	this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy); 
	event.preventDefault();
	}
	
	renderSortByPreferences() {
		return Object.keys(this.sortByPreferences).map((sortByPreference) => {
			let sortByPreferenceValue = this.sortByPreferences[sortByPreference]; 
			return <li key={sortByPreferenceValue} className={this.getSortByClass(sortByPreferenceValue)} onClick={this.handleSortByChange.bind(this, sortByPreferenceValue)}> {sortByPreference} </li>;
		});
	}

	render() {
		return (
			<div className="search-bar">
				<div className="search-bar-sort-by-options">
					<ul>{this.renderSortByPreferences()}</ul>
				</div>
				<div className="search-bar-fields">
					<input placeholder="Search Businesses" onChange={this.handleTermChange}/>
					<input placeholder="Where?" onChange={this.handleLocationChange}/>
				</div>
				<div className="search-bar-submit">
					<a  onClick={this.handleSearch}>Find</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;

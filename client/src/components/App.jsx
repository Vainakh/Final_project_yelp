import React from 'react';
// import './App.css';
import Businesses from './Businesses/Businesses.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import Yelp from "./../utilities/Yelp.jsx";

export default class App extends React.Component {
  constructor(props){
		super(props);

		this.state = {
			businesses : []
		};

		this.searchYelp = this.searchYelp.bind(this);
  }
  
	searchYelp(term, location, sortBy){
		Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses : businesses}); 
    });
  }
  
render(){
    return(
      <div className="container">
          <div className="search-bar-container">
          <nav className="main-header">
            {/* <div>Write a review</div>
            <div>Talk</div>
            <div>Event</div> */}
            <div className="auth-container">
              <div>Log In</div>
              <div>/</div>
              <div>Sign Up</div>
            </div>
          </nav>
				    <h1 className="search-bar-title">Yowlp</h1> 
            {/* <img src="./redflower.png" alt=""/> */}
				<SearchBar searchYelp={this.searchYelp}></SearchBar>
        <Businesses businesses={this.state.businesses} /> 
		  	</div>
      </div>
    )
  }
} 
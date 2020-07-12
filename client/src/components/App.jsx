import React from 'react';
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
        {/* <p>React is working!</p> */}
          <nav className="main-header">
            <div>Write a review</div>
            <div>Talk</div>
            <div>Event</div>
            <div className="auth-container">
              <div>Log In</div>
              <div>Sign Up</div>
            </div>
          </nav>

          <div className="searchbar-container">
				    <h1 className="searchbar-title">Yowlp</h1> 
				<SearchBar searchYelp={this.searchYelp}></SearchBar>
		  	</div>
      </div>
    )
  }
} 
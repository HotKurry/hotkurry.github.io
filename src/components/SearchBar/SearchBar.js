import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Rising Stars': 'rising_stars',
    'Highest Rated': 'rating',
};
class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>;
        });
      }
    render(){
        return(
 <div className="SearchBar">
<h2>Buy Crypto based on your favorite Elon Musk!</h2>
</div>
        )
    }  
  
}
export default SearchBar;
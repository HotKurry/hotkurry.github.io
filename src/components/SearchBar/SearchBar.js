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
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search for a Bae" />
  </div>
  <div className="SearchBar-submit">
    <a>Search</a>
  </div>
</div>
        )
    }  
  
}
export default SearchBar;
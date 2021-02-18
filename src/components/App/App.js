import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import WaifuList from '../WaifuList/WaifuList';

//WE ran out of time.  Next Time
class App extends React.Component {
  render(){
    return(
<div className="App">
  <h1>Bae Trade</h1>
  <SearchBar />
  <WaifuList />
</div>
    );
  }
}

export default App;

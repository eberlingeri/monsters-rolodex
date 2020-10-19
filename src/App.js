
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';


import './App.css';

// function App() {
  class App extends Component {
    constructor() {
      super();
      this.state ={
        monsters: [],
        searchField: ''
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters : users}))
    }

    handleChgange = (event) => {
      // Added a new comment to describe what this function does
      this.setState({ searchField: event.target.value });
    }

    render(){
      const { monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

      return (
        <div className='App'>
          <SearchBox 
            placeHolder='Search Monster' 
            handleChange={ this.handleChgange }    
          />
          <CardList monsters={filteredMonsters} />
        </div>
      );
    }
}

export default App;

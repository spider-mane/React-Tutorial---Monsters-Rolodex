import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/searchbox/searchbox';
import './App.css';

export default class App extends Component {
  /**
   * 
   */
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: ''
    };

  }

  /**
   * 
   */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  /**
   * 
   */
  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
      title: e.target.value
    });
  }

  /**
   * 
   */
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex Nigga!</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

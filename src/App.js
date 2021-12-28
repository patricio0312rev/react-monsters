import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
    
  }
  
  render() {
    // Distructuring 
    const { monsters, searchField } = this.state;
    /*
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */
   const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox handleChange={e => this.setState({ searchField: e.target.value })} placeholder='Buscar mounstruo...'/>
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;

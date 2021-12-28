import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

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
    return (
      <div className="App">
        <input type='search' placeholder='Buscar mounstruo' onChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={ this.state.monsters } />
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1',
          photo: 'https://robohash.org/1?set=set2&size=180x180'
        },
        {
          name: 'Dracula',
          id: 'asc2',
          photo: 'https://robohash.org/2?set=set2&size=180x180'
        },
        {
          name: 'Zombie',
          id: 'asc3',
          photo: 'https://robohash.org/3?set=set2&size=180x180'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
          this.state.monsters.map((monster) => {
            return  <h1 key={monster.id}>{monster.name}</h1>
            
          })
          }
         

        </header>
      </div>
    );
  }
}


export default App;

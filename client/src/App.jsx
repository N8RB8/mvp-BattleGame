import React from 'react';
import Character from './character.js';
import CreateCharacter from './components/CreateCharacter.jsx';
import Main from './components/Main.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      gameStarted: false,
      player: {},
      monster: {},
    };
  }

  initCharacter(name, playerClass) {
    console.log('name:', name);
    console.log('player class:', playerClass);
    this.setState({player: new Character(name, playerClass), gameStarted: true});
  }

  render() {
    return (
      <div>
        {this.state.gameStarted ? <Main player={this.state.player}/> : <CreateCharacter initCharacter={this.initCharacter.bind(this)}/>}
      </div>
    );
  }
}


export default App;
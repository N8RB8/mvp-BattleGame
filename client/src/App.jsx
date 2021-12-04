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
      player: null,
      monster: {},
    };
  }

  initCharacter(name, playerClass) {
    this.setState({player: new Character(name, playerClass), gameStarted: true});
  }

  newGame() {
    //
  }

  continueGame() {
    //
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
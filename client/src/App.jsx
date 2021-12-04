import React from 'react';
import Character from './classes/character.js';
import CreateCharacter from './components/CreateCharacter.jsx';
import Main from './components/Main.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      gameStarted: false,
      player: null,
      session: null,
    };
  }

  initCharacter(name, playerClass) {
    let player = new Character(name, playerClass)
    this.saveGame(player);
    this.setState({player: player, gameStarted: true});
  }

  updatePlayer(player) {
    this.setState({player});
  }

  saveGame(player) {
    console.log('save called')
    axios.post('/playerData', {player})
    .then(res => this.setState({session: res.data}))
    .catch(err => console.log);
  }

  continueGame(playerId) {
    console.log(playerId);
    axios.get('/playerData', {params: {_id: playerId}})
    .then(({data}) => this.setState({player: data, gameStarted: true, session: data._id}))
    .catch(err => console.log);
  }

  render() {
    return (
      <div>
        {this.state.gameStarted ? <Main player={this.state.player} saveGame={this.saveGame.bind(this)}/> : <CreateCharacter initCharacter={this.initCharacter.bind(this)} saveGame={this.saveGame.bind(this)} loadGame={this.continueGame.bind(this)}/>}
        {this.state.gameStarted ? <div> This is your character ID. Keep this to continue next time! <br/> {this.state.session} <br/>PLEASE NOTE: this will change each time you save.</div> : null}
      </div>
    );
  }
}


export default App;
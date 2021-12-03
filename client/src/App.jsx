import React from 'react';
import CreateCharacter from './components/CreateCharacter.jsx';

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

  }

  render() {
    return (
      <div>
        {this.state.gameStarted ? <PreFight /> : <CreateCharacter initCharacter={this.initCharacter.bind(this)}/>}
      </div>
    );
  }
}


export default App;
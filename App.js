import React, { Component } from 'react';
import { Intro, Game } from './src';

class App extends Component {
  state = { playing: false }

  render() {
    return (
      this.state.playing
        ? <Game />
        : <Intro startGame={ () => this.setState({ playing: true }) } /> 
    )
  }
}

export default App;
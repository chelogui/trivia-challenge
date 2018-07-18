import React from 'react';
import { Intro, styles, Game } from './src';

export default class App extends React.Component {

  state = { playing: false }

  startGame = () => this.setState({playing: true})

  renderChooser = ( {playing, questionsData} ) => (
    playing 
      ? <Game styles={styles} />
      : <Intro styles={styles} startGame={this.startGame} />
  )

  render() { return this.renderChooser(this.state) }
}

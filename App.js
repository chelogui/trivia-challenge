import React from 'react';
import { Intro, styles, Game } from './src';

export default class App extends React.Component {

  state = {
    questionsData: [],
    playing: false,
  }

  componentDidMount = () => {
    this.getQuestions()
  }

  getQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((data) => data.json())
      .then((data) => { this.setState({ questionsData: data.results }) })
  }

  renderChooser = ( {playing, questionsData} ) => (
    playing 
      ? <Game styles={styles} questions={questionsData} />
      : <Intro styles={styles} />
  )

  render() { return this.renderChooser(this.state) }
}

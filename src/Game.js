import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Question from './Question';

class Game extends Component { 
  constructor() {
    super();
    this.state = {
      questions: [],
      hits: [],
      mistakes: [],
    }
  }

  getQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((data) => data.json())
      .then((data) => { this.setState({ questions: data.results }) })
  }

  componentDidMount = () => {
    this.getQuestions()
  }

  handleAnswer = (option, item) => {
    if ( option === 'correct' ) {
      console.log('atualizar o sim')
      this.setState(
        (prevState) => ({ hits: [ ...prevState.hits, item ] }), 
        () => console.log(this.state.hits.length)
      )
    } else {
      console.log('atualizar o nao')
      this.setState(
        (prevState) => ({ mistakes: [ ...prevState.mistakes, item ] }),
        () => console.log(this.state.mistakes.length)
      )
    }
  }

  renderChooser = () => {
    let content;
    const { styles } = this.props;
    const { questions } = this.state;

    if (!this.state.questions.length) {
      content = <View style={[ styles.container, {justifyContent: 'center'} ]}><ActivityIndicator size="large" color="#0000ff" /></View>
    } else {
      content = <Question
                  answer={this.handleAnswer}
                  item={questions[0]}
                  styles={styles}
                />
    }

    return content;
  }

  render() { return this.renderChooser() }
}

export default Game;
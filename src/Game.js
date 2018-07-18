import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Question from './Question';

class Game extends Component { 
  constructor() {
    super();
    this.state = {
      questions: [],
      user: {
        anwsers: [],
        current: 0,
      }
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

  handleAnswer = (option) => {
    if (option) {
      console.log('Você respondeu sim!')
    } else {
      console.log('Você respondeu não!')
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
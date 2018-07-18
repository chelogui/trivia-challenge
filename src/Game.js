import React, { PureComponent } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  Question,
  Result,
  styles
} from './';

class Game extends PureComponent { 
  constructor() {
    super();
    this.state = {
      questions: [],
      answers: [],
      currentQuestion: 0,
    }
  }

  getQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((data) => data.json())
      .then((data) => { this.setState({ questions: data.results }) })
  }

  componentDidMount = () => this.getQuestions()

  nextQuestion = () => this.setState()

  handleAnswer = (option, item) => {
    this.setState((prevState) => ({
      answers: [ ...prevState.answers, { correct: option, item } ],
      currentQuestion: prevState.currentQuestion + 1
    }))
  }

  restart = () => {
    this.setState({
      answers: [],
      currentQuestion: 0,
    })
  }

  renderChooser = () => {
    const { questions, currentQuestion, answers } = this.state;

    if (!questions.length) {
      return (
        <View style={[ styles.container, {justifyContent: 'center'} ]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    } else if ( questions.length > currentQuestion ) {
      return <Question currentQuestion={currentQuestion} answer={this.handleAnswer} item={questions[currentQuestion]} />
    } else {
      return <Result answers={answers} restart={this.restart}/>
    }
  }

  render() { return this.renderChooser() }
}

export default Game;
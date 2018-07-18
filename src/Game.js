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
      hits: [],
      mistakes: [],
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
    ( option )
      ? this.setState(
        (prevState) => ({
            hits: [ ...prevState.hits, { order: prevState.currentQuestion, item } ],
            currentQuestion: prevState.currentQuestion + 1
          })
        )
      : this.setState(
          (prevState) => ({
            mistakes: [ ...prevState.mistakes, { order: prevState.currentQuestion, item } ],
            currentQuestion: prevState.currentQuestion + 1
          })
        )
  }

  restart = () => {
    this.setState({
      hits: [],
      mistakes: [],
      currentQuestion: 0,
    })
  }

  renderChooser = () => {
    const { questions, currentQuestion, hits, mistakes } = this.state;

    if (!questions.length) {
      return (
        <View style={[ styles.container, {justifyContent: 'center'} ]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    } else if ( questions.length > currentQuestion ) {
      return <Question currentQuestion={currentQuestion} answer={this.handleAnswer} item={questions[currentQuestion]} />
    } else {
      return <Result hits={hits} mistakes={mistakes} restart={this.restart}/>
    }
  }

  render() { return this.renderChooser() }
}

export default Game;
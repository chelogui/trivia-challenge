import React, { PureComponent } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Question, Result } from './';

export default class Game extends PureComponent { 
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
    ( option === 'correct' )
      ? this.setState(
        (prevState) => ({
            hits: [ ...prevState.hits, item ],
            currentQuestion: prevState.currentQuestion + 1
          })
        )
      : this.setState(
          (prevState) => ({
            mistakes: [ ...prevState.mistakes, item ],
            currentQuestion: prevState.currentQuestion + 1
          })
        )
  }

  renderChooser = () => {
    const { styles } = this.props;
    const { questions, currentQuestion } = this.state;

    if (!questions.length) {
      return (
        <View style={[ styles.container, {justifyContent: 'center'} ]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    } else if ( questions.length > currentQuestion ) {
      return (
        <Question
            answer={this.handleAnswer}
            item={questions[currentQuestion]}
            styles={styles}
        />
      )
    } else {
      return (
        <Result
          styles={styles}
        />
      )
    }
  }

  render() { return this.renderChooser() }
}
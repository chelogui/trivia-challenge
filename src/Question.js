import React from 'react';
import { View, Text } from 'react-native';
import { styles, replaceStr } from './'

export default (props) => {
  const { item, answer, currentQuestion } = props;

  const answering = (option) => {
    (item.correct_answer === option) ? answer(true, item) : answer(false, item)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{item.category}</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.centeredText, styles.question]}>{replaceStr(item.question)}</Text>
        <Text style={styles.status}> {currentQuestion} of 10 </Text>
      </View>

      <View style={[styles.contentAnswers]}>
        <Text onPress={() => answering('True')} style={styles.option}>Yes</Text>
        <Text onPress={() => answering('False')} style={styles.option}>No</Text>
      </View>

    </View>
  )
}
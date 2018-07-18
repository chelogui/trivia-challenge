import React from 'react';
import { View, Text, Button } from 'react-native';
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
        <Text style={styles.status}> {currentQuestion + 1} of 10 </Text>
      </View>

      <View style={[styles.contentAnswers]}>
        <View style={styles.option}>
          <Button color="green" onPress={() => answering('True')} title="Yes" />
        </View>

        <View style={styles.option}>
          <Button color="red" onPress={() => answering('False')} title="No" />
        </View>
      </View>

    </View>
  )
}
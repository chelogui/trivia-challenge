import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default (props) => {
  const {
    styles,
    item,
    answer,
  } = props;

  console.log('================');
  console.log(item);
  console.log('================');

  const answering = (option) => {
    console.log('Resposta: ', item.correct_answer);
    (item.correct_answer === option)
      ? answer('correct', item)
      : answer('wrong', item)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{item.category}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.centeredText}>{item.question}</Text>
      </View>

      <View style={[styles.contentAnswers]}>
        <Text onPress={() => answering('True')} style={styles.option}>Yes</Text>
        <Text onPress={() => answering('False')} style={styles.option}>No</Text>
      </View>

      <View style={styles.footer}>
        <Text>Não sei ainda...</Text>
      </View>
    </View>
  )
}
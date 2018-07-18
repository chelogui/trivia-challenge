import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default ({ styles, item, answer}) => {
  console.log('================');
  console.log(item);
  console.log('================');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{item.category}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.centeredText}>{item.question}</Text>

      </View>

      <View style={[styles.contentAnswers]}>

        <Text
          onPress={ () => answer(true) }
          style={styles.option}>
          Yes
        </Text>

        <Text
          onPress={ () => answer(false) }
          style={styles.option}>
          No
        </Text>

      </View>

      <View style={styles.footer}>
        <Text>Não sei ainda...</Text>
      </View>
    </View>
  )
}
import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { styles, replaceStr } from './';

export default ({ answers, restart }) => {
    const hits = answers.filter(item => item.correct );

    const generateKey = (pre) => {
      return `${ pre }_${ new Date().getTime() }`;
    }

    return (
      <ScrollView styles={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>You scored { hits.length } / 10 </Text>
          </View>

          <View style={styles.contentResult}>
            {answers.map( (item, index) => {
              return (
                <View style={styles.questionListItem} key={generateKey(index)}>
                  <Text style={styles.questionStatus}> { item.correct ? '+' : '-' } </Text>
                  <Text style={styles.questionResult}>{replaceStr(item.item.question)}</Text>
                </View>
              )
            })}
          </View>

          <View style={styles.footer}>
            <Text onPress={restart}>PLAY AGAIN?</Text>
          </View>
        </View>
      </ScrollView>
    )
}

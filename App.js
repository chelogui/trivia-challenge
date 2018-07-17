import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Welcome to the Trivia Challenge!</Text>
        </View>

        <View style={styles.content}>
          <Text style={[ styles.centeredText, { color: 'red' } ]}>You will be presented with 10 True or False questions.</Text>
          <Text>Can you score 100%?</Text>
        </View>

        <View style={styles.footer}>
          <Text>BEGIN</Text>        
        </View>
      </View>
    );
  }
}

const border = {
  borderColor: 'red',
  borderWidth: 1,
};

const styles = StyleSheet.create({
  container: {
    // ...border,
    flex: 1,
    paddingTop: 23,
  },
  header: {
    // ...border,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    ...border,
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  footer: {
    // ...border,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
});

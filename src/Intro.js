import React from 'react';
import { View, Text } from 'react-native';

export default ({ styles }) => (
  <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to the Trivia Challenge!</Text>
    </View>

    <View style={styles.content}>
        <Text style={styles.centeredText}>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
    </View>

    <View style={styles.footer}>
        <Text onPress={(e) => console.log(e)}>BEGIN</Text>
    </View>
  </View>
)
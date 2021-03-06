import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './'

export default ({ startGame }) => (
  <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to the {"\n"} Trivia Challenge!</Text>
    </View>

    <View style={styles.content}>
        <Text style={styles.centeredText}>You will be presented {"\n"} with 10 True or False {"\n"} questions.</Text>
        <Text style={[styles.centeredText, { marginTop: 50}]}>Can you score 100%?</Text>
    </View>

    <View style={styles.footer}>
        <Button onPress={startGame} title="BEGIN" />
    </View>
  </View>
)
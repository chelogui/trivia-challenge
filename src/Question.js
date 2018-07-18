import React from 'react';
import { View, Text } from 'react-native';

export default ({ styles, item}) => (
  <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{item.category}</Text>
    </View>

    <View style={styles.content}>
        <Text style={styles.centeredText}>{item.question}</Text>
    </View>

    <View style={styles.footer}>
        <Text>Não sei ainda...</Text>
    </View>
  </View>
)
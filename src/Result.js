import React from 'react';
import { View, Text } from 'react-native';

export default ({ styles }) => (
  <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Final!!!</Text>
    </View>

    <View style={styles.content}>
        <Text style={styles.centeredText}>Resultado</Text>
        <Text>Voce acertou muitas!</Text>
    </View>

    <View style={styles.footer}>
        <Text onPress={(e) => console.log(e)}>Restart</Text>
    </View>
  </View>
)

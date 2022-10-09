import React from 'react';
import { View, Button, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Tab3Screen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Feather
        name="alert-triangle"
        size={100}
        color = "black"
      />
      <Text>공사중</Text>
    </View>
  );
}
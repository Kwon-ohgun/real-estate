import React from 'react';
import { View, Button } from 'react-native';

export default function Tab3Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Tab3Detail"
        onPress={() => navigation.navigate('Tab3Detail')}
      />
    </View>
  );
}
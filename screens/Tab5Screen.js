import React from 'react';
import { View, Button } from 'react-native';

export default function Tab5Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Tab5Detail"
        onPress={() => navigation.navigate('Tab5Detail')}
      />
    </View>
  );
}
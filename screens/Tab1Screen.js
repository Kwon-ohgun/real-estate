import React from 'react';
import { View, Button } from 'react-native';

export default function Tab1Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Tab1Detail"
        onPress={() => navigation.navigate('Tab1Detail')}
      />
    </View>
  );
}
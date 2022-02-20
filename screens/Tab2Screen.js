import React from 'react';
import { View, Button } from 'react-native';

export default function Tab2Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Tab2Detail"
        onPress={() => navigation.navigate('Tab2Detail')}
      />
    </View>
  );
}
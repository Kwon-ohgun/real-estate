import React from 'react';
import { View, Button } from 'react-native';

export default function Tab4Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Tab4Detail"
        onPress={() => navigation.navigate('Tab4Detail')}
      />
    </View>
  );
}
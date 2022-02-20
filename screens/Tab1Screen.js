import React from 'react';
import { View, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Tab1Screen({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{ uri: 'http://192.168.0.39:5100/map.html' }}
        style={{
          width: Dimensions.get('window').width
        }}
      ></WebView>
    </View>
  );
}
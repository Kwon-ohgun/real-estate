import React from 'react';
import { View, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Tab1Screen({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{ uri: 'https://real-estate-g.web.app/map.html' }}
        style={{
          width: Dimensions.get('window').width
        }}
      ></WebView>
    </View>
  );
}
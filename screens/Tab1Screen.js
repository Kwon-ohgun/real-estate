import React from 'react';
import { View, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { inject, observer } from 'mobx-react';

function Tab1Screen({ navigation, estatesStore }) {
  console.log(estatesStore);
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

export default inject('estatesStore')(observer(Tab1Screen));

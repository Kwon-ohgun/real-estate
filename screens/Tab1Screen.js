import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';


function Tab1Screen({ navigation, estatesStore }) {
  const webView = useRef();
  console.log(estatesStore);
  useEffect(() => {
    estatesStore.estatesRead();
  }, [estatesStore]);
  setTimeout(() => {
    webView.current.injectJavaScript(`webFunction(${Dimensions.get('window').width}, ${Dimensions.get('window').height}); true;`);
  }, 1000);
  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webView}
        cacheEnabled={false}
        cacheMode={'LOAD_NO_CACHE'}
        incognito={true}
        source={{ uri: 'https://real-estate-g.web.app/map.html' }}
        style={{
          width: Dimensions.get('window').width
        }}
        injectJavaScript={`webFunction(${Dimensions.get('window').width}, ${Dimensions.get('window').height}); true;`}
        // injectedJavaScript={`alert('abc'); true;`}
      ></WebView>
    </View>
  );
}

export default inject('estatesStore')(observer(Tab1Screen));

import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';


function Tab1Screen({ navigation, estatesStore }) {
  const webView = useRef();
  useEffect(() => {
    // estatesStore.estatesRead();
    estatesStore.webView = webView;
  }, [estatesStore]);
  // setTimeout(() => {
  //   // 화면이 그려지기 전에 호출 되면 안됨
  //   webView.current.injectJavaScript(`webFunction(${Dimensions.get('window').width}, ${Dimensions.get('window').height}); true;`);
  // }, 2000);

  return (
    <View style={{flex: 1}}>
      <WebView
        onMessage={event => {
          if (event.nativeEvent.data === 'mapSize') {
            webView.current.injectJavaScript(`webFunction(${Dimensions.get('window').width}, ${Dimensions.get('window').height}); true;`);
          }
        }}
        ref={webView}
        cacheEnabled={false}
        cacheMode={'LOAD_NO_CACHE'}
        incognito={true}
        source={{ uri: 'https://real-estate-g.web.app/map.html' }}
        style={{
          width: Dimensions.get('window').width
        }}
        // injectJavaScript={`webFunction(${Dimensions.get('window').width}, ${Dimensions.get('window').height}); true;`}
        // injectedJavaScript={`alert('abc'); true;`}
      ></WebView>
    </View>
  );
}

export default inject('estatesStore')(observer(Tab1Screen));

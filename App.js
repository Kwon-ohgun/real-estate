import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';
import Tab5Screen from './screens/Tab5Screen';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Provider } from 'mobx-react';
import { congressesStore } from './stores/congressesStore';

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Tab1"
      screenOptions={{
        tabBarStyle: {
          // paddingBottom: 2
          // marginBottom: 4
        }
      }}
    >
      <BottomTab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={({ navigation }) => ({
          title: '지도화면',
          tabBarLabel: '지도화면',
          // tabBarLabelStyle: {
          //   marginBottom: 2
          // }, 
          headerTitleAlign: 'center',
          headerRight: () => (
            <Pressable onPress={() => {
              congressesStore.toggleEnviromento();
              congressesStore.webView.current.injectJavaScript(`webFunctionSearch(${congressesStore.enviromento}); true;`);
            }}>
              <AntDesign
                name="enviromento"
                size={25}
                style={{color: 'blue', marginRight: 16}}
              />
            </Pressable>
          ),
          tabBarIcon: () => {
            return navigation.getState().index === 0 ? <Image
              style={{
                width: 24,
                height: 24
              }}
              source={require('./assets/map.jpg')}
              /> : <Image
              style={{
                width: 24,
                height: 24
              }}
              source={require('./assets/map-o.jpg')}
            />
          }
        })}
      />
      <BottomTab.Screen
        name="통합검색"
        component={Tab2Screen}
        options={{
          tabBarIcon: () => <AntDesign
              name="message1"
              size={24}
              color = "black"
            />
         }}      
      />
      <BottomTab.Screen
        name="주식자산"
        component={Tab3Screen}
        options={{
          tabBarLabel: "주식자산",
          tabBarIcon: () => <Entypo
              name="news"
              size={24}
              color = "black"
            />
        }}
      />
      <BottomTab.Screen
        name="Tab4"
        component={Tab4Screen}
        options={{
          title: '테스트',
          tabBarLabel: '테스트',
          headerTitleAlign: 'center'
        }}
      />
      <BottomTab.Screen
        name="내 정보"
        component={Tab5Screen}
        options={{
          tabBarIcon: () => <FontAwesome5
              name="user"
              size={24}
              color = "black"
            />
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setIsLodaing] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLodaing(false);
    }, 1000);
  }, []);
  return (
    isLoading ? <Image
    style={{
      width: '100%',
      height: '100%'
    }}
    source={require('./assets/splash.jpg')}
    /> :
    <Provider
      congressesStore={congressesStore}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
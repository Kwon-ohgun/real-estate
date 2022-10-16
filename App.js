import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab5Screen from './screens/Tab5Screen';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Provider } from 'mobx-react';
import { congressesStore } from './stores/congressesStore';
import { userStore } from './stores/userStore';
import { Feather } from '@expo/vector-icons';
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged, updateProfile } from 'firebase/auth'


initializeApp({
  apiKey: "AIzaSyD8y8vBluO_pEWVdnD9K5Go2gkAORkWyRc",
  authDomain: "real-estate-g.firebaseapp.com",
  databaseURL: "https://real-estate-g-default-rtdb.firebaseio.com",
  projectId: "real-estate-g",
  storageBucket: "real-estate-g.appspot.com",
  messagingSenderId: "759734943780",
  appId: "1:759734943780:web:03df75cbebd71505aa98b1"
});
const auth = getAuth();
onAuthStateChanged(auth, user => {
  console.log('로그인 상태 변경', user)
  if (user) {
    console.log(user);
    userStore.setUser(user)
  } else {
    signInAnonymously(auth).then((user) => {
      console.log(user)
      updateProfile(auth.currentUser, {
        displayName: '사용자'
      })
    }).catch((error) => {
      console.error(error)
    });
  }
})

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
        options={({ navigation }) => ({
          tabBarIcon: () => {
            return navigation.getState().index === 1 ? <Image
              style={{
                width: 24,
                height: 24
              }}
              source={require('./assets/search.png')}
              /> : <Image
              style={{
                width: 24,
                height: 24
              }}
              source={require('./assets/search-o.png')}
            />
          }
         })}      
      />
      <BottomTab.Screen
        name="주식자산"
        component={Tab3Screen}
        options={{
          tabBarLabel: "주식자산",
          tabBarIcon: () => <Feather
              name="alert-triangle"
              size={24}
              color = "black"
            />
        }}
      />
      <BottomTab.Screen
        name="내 정보"
        component={Tab5Screen}
        options={({ navigation }) => ({
          tabBarIcon: () => {
            return navigation.getState().index === 3 ? <Image
              style={{
                width: 24,
                height: 24
              }}
              source={require('./assets/user.png')}
              /> : <Image
              style={{
                width: 24,
                height: 24
              }}
              source={require('./assets/user-o.png')}
            />
          }
        })}
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
      userStore={userStore}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
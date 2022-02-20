import React from 'react';
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';
import Tab5Screen from './screens/Tab5Screen';
import { FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Pressable } from 'react-native';


const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Tab1">
      <BottomTab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={({ navigation }) => ({
          title: '지도화면',
          tabBarLabel: '지도화면',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate()}>
              <AntDesign
                name="enviromento"
                size={25}
                style={{color: 'blue', marginRight: 25}}
              />
            </Pressable>
          ),
          tabBarIcon: () => <FontAwesome
            name="map-o"
            size={24}
            color="black"
          />
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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
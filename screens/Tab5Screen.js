import React from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import { signOut, getAuth } from 'firebase/auth'

const Tab5Screen = ({ userStore }) => {
  const user = userStore.user;
  return (
    <View>
      <Text>{user.displayName}</Text>
      <Button title='logout' onPress={() => {
        signOut(getAuth());
      }}></Button>
    </View>
  );
}

export default inject('userStore')(observer(Tab5Screen));

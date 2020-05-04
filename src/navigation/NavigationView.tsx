import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {stackScreeenArray} from './stackScreeenArray';

const Stack = createStackNavigator();

export default function NavigationView() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {stackScreeenArray.map((stackScreenProps, key) => (
          <Stack.Screen {...{key, ...stackScreenProps}} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

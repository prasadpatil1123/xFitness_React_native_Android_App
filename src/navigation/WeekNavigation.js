
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';



const Stack = createNativeStackNavigator();

const WeekNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
  
      <Stack.Screen name='Sunday' component={Sunday} />
    
      

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default WeekNavigation

const styles = StyleSheet.create({})
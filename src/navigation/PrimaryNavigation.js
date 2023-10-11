import { StyleSheet, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Welcome from '../StartScreen/Welcome';
import SignUp from '../StartScreen/SignUp';
import Login from '../StartScreen/Login';
import Home from '../DashBoard/Home';
import Gender from '../DashBoard/GenderFile/Gender';
import Male from '../DashBoard/GenderFile/Male';
import Female from '../DashBoard/GenderFile/Female';
import Exercise from '../DashBoard/Exercise';
import LessEqp from '../ExerciseOption/LessEqp';
import WithDumb from '../ExerciseOption/WithDumb';
import WithGym from '../ExerciseOption/WithGym';
import About from '../DashBoard/components/About';
import Profile from '../DashBoard/components/Profile';
import BMI from '../DashBoard/components/BMI';
import Share from '../DashBoard/components/Share';
import Logout from '../DashBoard/Logout';
import WeekNavigator from './WeekNavigator';
import WeekNavigatorAlpha from './WeekNavigatorAlpha';
import WeekNavigatorBeta from './WeekNavigatorBeta';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerBarComponent = ({ route }) => {
  const { username } = route.params;
  return (
    <Drawer.Navigator initialRouteName='Home '>
      <Drawer.Screen name='Home ' options={{ headerShown: true }} component={Home} />
      <Drawer.Screen name='Profile Screen' options={{ title: `${username}` }} component={Profile} />
      <Drawer.Screen name='BMI Calculator' component={BMI} />
      <Drawer.Screen name='About' component={About} />
      <Drawer.Screen name='Share' component={Share} />
      <Drawer.Screen name='Logout' options={{ headerShown: false }} component={Logout} />
    </Drawer.Navigator>
  )
}

const PrimaryNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome Screen' options={{ headerShown: false }} component={Welcome} />
        <Stack.Screen name='SignUp Screen' options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name='Login Screen' options={{ headerShown: false }} component={Login} />
        <Stack.Screen name='Drawer Screen' options={{ headerShown: false }} component={DrawerBarComponent} />
        <Stack.Screen name='Gender Screen' component={Gender} />
        <Stack.Screen name='Male Screen' component={Male} />
        <Stack.Screen name='Female Screen' component={Female} />
        <Stack.Screen name='Exercise Screen' component={Exercise} />
        <Stack.Screen name='Without Equipment' component={LessEqp} />
        <Stack.Screen name='With Dumbbell' component={WithDumb} />
        <Stack.Screen name='With Gym' component={WithGym} />
        <Stack.Screen name='Week Screen' options={{ headerShown: false }} component={WeekNavigator} />
        <Stack.Screen name='Week Screen Alpha' options={{ headerShown: false }} component={WeekNavigatorAlpha} />
        <Stack.Screen name='Week Screen Beta' options={{ headerShown: false }} component={WeekNavigatorBeta} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default PrimaryNavigation;

const styles = StyleSheet.create({})
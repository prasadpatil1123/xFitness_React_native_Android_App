import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WarmUp from './src/ExerciseDetail/Without_Equipment/WarmUp';
import PushUps from './src/ExerciseDetail/Without_Equipment/PushUps';

import Sunday from './src/WeekPlan/sunday/Sunday';
import Week from './src/WeekPlan/Week';

import WithGym from './src/ExerciseOption/WithGym';
import WithDumb from './src/ExerciseOption/WithDumb';
import LessEqp from './src/ExerciseOption/LessEqp';
import Exercise from './src/DashBoard/Exercise';

import Male from './src/DashBoard/GenderFile/Male';
import Female from './src/DashBoard/GenderFile/Female';
import Gender from './src/DashBoard/GenderFile/Gender';

import Home from './src/DashBoard/Home';

import Login from './src/StartScreen/Login';
import SignUp from './src/StartScreen/SignUp';
import Welcome from './src/StartScreen/Welcome';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome Screen' component={Welcome} />
        <Stack.Screen name='SignUp Screen' component={SignUp} />
        <Stack.Screen name='Login Screen' component={Login} />
        <Stack.Screen name='Home Screen' component={Home} />
        <Stack.Screen name='Gender Screen' component={Gender} />
        <Stack.Screen name='Male Screen' component={Male} />
        <Stack.Screen name='Female Screen' component={Female} />
        <Stack.Screen name='Exercise Screen' component={Exercise} />
        <Stack.Screen name='Without Equipment' component={LessEqp} />
        <Stack.Screen name='With Dumbbell' component={WithDumb} />
        <Stack.Screen name='With Gym' component={WithGym} />
        {/* <Stack.Screen name='Level Stage' component={Level} /> */}
        <Stack.Screen name='Week Plan' component={Week} />
        {/* <Stack.Screen name='Day Plan' component={DayScreen} /> */}
        <Stack.Screen name='Sunday' component={Sunday} />
        <Stack.Screen name='Warm-Up' component={WarmUp} />
        <Stack.Screen name='Push-Ups' component={PushUps} />
        {/* <Stack.Screen name='Bodyweight Squats' component={BodyweightSquats} />
        <Stack.Screen name='Plank' component={Plank} />
        <Stack.Screen name='Lunges' component={Lunges} />
        <Stack.Screen name='Mountain Climbers' component={MountainClimbers} />
        <Stack.Screen name='Glute Bridges' component={GluteBridges} />
        <Stack.Screen name='Tricep Dips' component={TricepDips} />
        <Stack.Screen name='Supermans' component={Supermans} />
        <Stack.Screen name='High Knees' component={HighKnees} />
        <Stack.Screen name='Side Planks' component={SidePlanks} />
        <Stack.Screen name='Cool Down' component={CoolDown} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}





export default App


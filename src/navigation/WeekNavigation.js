import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Week from '../WeekPlan/Week';
import { Sunday } from '../WeekPlan/sunday/Sunday';
import Monday from '../WeekPlan/monday/Monday';
import Tuesday from '../WeekPlan/tuesday/Tuesday';
import Wednesday from '../WeekPlan/wednesday/Wednesday';
import Thursday from '../WeekPlan/thursday/Thursday';
import Friday from '../WeekPlan/friday/Friday';
import Saturday from '../WeekPlan/saturday/Suturday';
import ExerciseDetails from '../WeekPlan/ExerciseDetails';

const WeekStack = createNativeStackNavigator();
const WeekNavigator = (props) => (
  <WeekStack.Navigator>
    <WeekStack.Screen
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} name="Week" component={Week} />
    <WeekStack.Screen name="Sunday"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Sunday} />
    <WeekStack.Screen name="Monday"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Monday} />
    <WeekStack.Screen name="Tuesday"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Tuesday} />
    <WeekStack.Screen name='Wednesday'
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Wednesday} />
    <WeekStack.Screen name='Thursday'
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Thursday} />
    <WeekStack.Screen name='Friday'
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Friday} />
    <WeekStack.Screen name='Saturday'
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Saturday} />

    <WeekStack.Screen name='Exercise Details'
      component={ExerciseDetails} />
  </WeekStack.Navigator>
);

export default WeekNavigator;
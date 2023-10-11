import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Week from '../WeekPlan/Week';
import Monday from '../WeekPlan/monday/Monday';
import Sunday from '../WeekPlan/sunday/Sunday';
import WarmUp from '../Without_Equipment/WarmUp';
import PushUps from '../Without_Equipment/PushUps';
import BodyweightSquats from '../Without_Equipment/BodyweightSquats';
import Plank from '../Without_Equipment/Plank';
import Lunges from '../Without_Equipment/Lunges';
import MountainClimbers from '../Without_Equipment/MountainClimbers';
import GluteBridges from '../Without_Equipment/GluteBridges';
import TricepDips from '../Without_Equipment/TricepDips';
import Supermans from '../Without_Equipment/Supermans';
import HighKnees from '../Without_Equipment/HighKnees';
import SidePlanks from '../Without_Equipment/SidePlanks';
import CoolDown from '../Without_Equipment/CoolDown';

const WeekStack = createNativeStackNavigator();

const WeekNavigatorBeta = (props) => {
  return (
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


    <WeekStack.Screen name="Warm-Up"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={WarmUp} />

<WeekStack.Screen name="Push-Ups"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={PushUps} />


<WeekStack.Screen name="Bodyweight Squats"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={BodyweightSquats} />

<WeekStack.Screen name="Plank"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Plank} />

<WeekStack.Screen name="Lunges"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Lunges} />

<WeekStack.Screen name="Mountain Climbers"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={MountainClimbers} />

<WeekStack.Screen name="Glute Bridges"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={GluteBridges} />

<WeekStack.Screen name="Tricep Dips"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={TricepDips} />

<WeekStack.Screen name="Supermans"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={Supermans} />

<WeekStack.Screen name="High Knees"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={HighKnees} />

<WeekStack.Screen name="Side Planks"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={SidePlanks} />

<WeekStack.Screen name="Cool Down"
      options={{
        headerShown: true,
        title: '',
        headerBackVisible: true,
        headerBackTitleVisible: false,
      }} component={CoolDown} />


  </WeekStack.Navigator>
  )
}

export default WeekNavigatorBeta
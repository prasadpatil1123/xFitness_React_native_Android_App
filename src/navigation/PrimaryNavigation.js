import { StyleSheet,  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import Week from '../WeekPlan/Week';
import Sunday from '../WeekPlan/sunday/Sunday';
import WarmUp from '../ExerciseDetail/Without_Equipment/WarmUp';
import PushUps from '../ExerciseDetail/Without_Equipment/PushUps';
import BodyweightSquats from '../ExerciseDetail/Without_Equipment/BodyweightSquats';
import Plank from '../ExerciseDetail/Without_Equipment/Plank';
import Lunges from '../ExerciseDetail/Without_Equipment/Lunges';
import MountainClimbers from '../ExerciseDetail/Without_Equipment/MountainClimbers';
import GluteBridges from '../ExerciseDetail/Without_Equipment/GluteBridges';
import TricepDips from '../ExerciseDetail/Without_Equipment/TricepDips';
import Supermans from '../ExerciseDetail/Without_Equipment/Supermans';
import HighKnees from '../ExerciseDetail/Without_Equipment/HighKnees';
import SidePlanks from '../ExerciseDetail/Without_Equipment/SidePlanks';
import CoolDown from '../ExerciseDetail/Without_Equipment/CoolDown';
import Monday from '../WeekPlan/monday/Monday';
import Tuesday from '../WeekPlan/tuesday/Tuesday';
import Wednesday from '../WeekPlan/wednesday/Wednesday';
import Thursday from '../WeekPlan/thursday/Thursday';
import Friday from '../WeekPlan/friday/Friday';
import Saturday from '../WeekPlan/saturday/Suturday';


const Stack = createNativeStackNavigator();
const PrimaryNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
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
      <Stack.Screen name='Monday' component={Monday} />
      <Stack.Screen name='Tuesday' component={Tuesday} />
      <Stack.Screen name='Wednesday' component={Wednesday} />
      <Stack.Screen name='Thursday' component={Thursday} />
      <Stack.Screen name='Friday' component={Friday} />
      <Stack.Screen name='Saturday' component={Saturday} />

      <Stack.Screen name='Warm-Up' component={WarmUp} />
      <Stack.Screen name='Push-Ups' component={PushUps} />
      <Stack.Screen name='Bodyweight Squats' component={BodyweightSquats} />
      <Stack.Screen name='Plank' component={Plank} />
      <Stack.Screen name='Lunges' component={Lunges} />
      <Stack.Screen name='Mountain Climbers' component={MountainClimbers} />
      <Stack.Screen name='Glute Bridges' component={GluteBridges} />
      <Stack.Screen name='Tricep Dips' component={TricepDips} />
      <Stack.Screen name='Supermans' component={Supermans} />
      <Stack.Screen name='High Knees' component={HighKnees} />
      <Stack.Screen name='Side Planks' component={SidePlanks} />
      <Stack.Screen name='Cool Down' component={CoolDown} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default PrimaryNavigation

const styles = StyleSheet.create({})
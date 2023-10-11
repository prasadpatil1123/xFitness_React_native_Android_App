import { StyleSheet, Text, View ,Button} from 'react-native'
import React, { useState } from 'react'
import LessEqp from '../ExerciseOption/LessEqp'
import WithDumb from '../ExerciseOption/WithDumb'
import WithGym from '../ExerciseOption/WithGym'


const Exercise = (props) => {

  // const [selectExerciseType, setSelectedExerciseType] = useState('');
  // const handleNext = () => {
  //   props.navigation.navigate('Without Equipment', { prev:"Gender Screen" })
  // }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '', }}>
    <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Select Training </Text>
      <Text> {' '} </Text>
      <Button title='Without Equipment' onPress={() => props.navigation.navigate("Without Equipment",{prev:"Gender Screen"})} />
      <Text> {' '} </Text>
      <Button title='With dumbbell' onPress={() => props.navigation.navigate("With Dumbbell",{prev:"Gender Screen"})} />
      <Text> {' '} </Text>
      <Button title='With Gym' onPress={() => props.navigation.navigate("With Gym",{prev:"Gender Screen"})} />

      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Button title="Next" onPress={handleNext} />
        </View> */}
    </View>

  </View>
  )
}

export default Exercise

const styles = StyleSheet.create({})
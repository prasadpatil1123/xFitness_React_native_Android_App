import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import Week from '../WeekPlan/Week'

const LessEqp = (props) => {



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'black', }}>
    <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Without Equipment </Text>
      <Text> {' '} </Text>
      <Button title='Beginner' onPress={() => props.navigation.navigate('Week Screen')} />
      <Text> {' '} </Text>
      <Button title='Intermediate' onPress={() => props.navigation.navigate('Week Screen Alpha')} />
      <Text> {' '} </Text>
      <Button title='Advanced' onPress={() => props.navigation.navigate('Week Screen Beta')} />
    </View>
  </View>
  )
}

export default LessEqp

const styles = StyleSheet.create({})
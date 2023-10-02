import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'


const Exercise = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '', }}>
    <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Select Training </Text>
      <Text> {' '} </Text>
      <Button title='Without Equipment' onPress={() => navigation.navigate('Without Equipment')} />
      <Text> {' '} </Text>
      <Button title='With dumbbell' onPress={() => navigation.navigate('With Dumbbell')} />
      <Text> {' '} </Text>
      <Button title='With Gym' onPress={() => navigation.navigate('With Gym')} />
    </View>
  </View>
  )
}

export default Exercise

const styles = StyleSheet.create({})
import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const WithGym = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'black', }}>
    <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold',color:'black' }}> With Gym </Text>
      <Text> {' '} </Text>
      <Button title='Biginner' onPress={() => props.navigation.navigate('Week Plan')} />
      <Text> {' '} </Text>
      <Button title='Intermediate' onPress={() => props.navigation.navigate('Week Plan')} />
      <Text> {' '} </Text>
      <Button title='Advanced' onPress={() => props.navigation.navigate('Week Plan')} />
    </View>
  </View>
  )
}

export default WithGym

const styles = StyleSheet.create({})
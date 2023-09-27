import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Male from './Male'
import Female from './Female'

const Gender = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'black', }}>

      <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' ,color:'black'}}>
          Select Gender :
        </Text>
        <Text>  {' '}  </Text>
        <Button title='Male' onPress={() => navigation.navigate('Male Screen')} />
        <Text> {' '} </Text>
        <Button title='Female' onPress={() => navigation.navigate('Female Screen')} />
      </View>
    </View>
  )
}

export default Gender

const styles = StyleSheet.create({})
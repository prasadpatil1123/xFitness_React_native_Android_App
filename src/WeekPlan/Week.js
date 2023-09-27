import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Sunday from './sunday/Sunday';

const Week = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'black', }}>
      <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold',color:'black' }}> Week Plan</Text>
        <Text> {' '} </Text>
        <Button title='Sunday' onPress={() => navigation.navigate('Sunday')} />
{/* 
        <Text> {' '} </Text>
        <Button title='Monday' onPress={() => navigation.navigate('DayScreen', { day: 'Monday' })} />
        <Text> {' '} </Text>
        <Button title='Tuesday' onPress={() => navigation.navigate('DayScreen', { day: 'Tuesday' })} />
        <Text> {' '} </Text>
        <Button title='Tuesday' onPress={() => navigation.navigate('DayScreen', { day: 'Wednesday' })} />
        <Text> {' '} </Text>
        <Button title='Tuesday' onPress={() => navigation.navigate('DayScreen', { day: 'Thursday' })} />
        <Text> {' '} </Text>
        <Button title='Tuesday' onPress={() => navigation.navigate('DayScreen', { day: 'Friday' })} />
        <Text> {' '} </Text>
        <Button title='Tuesday' onPress={() => navigation.navigate('DayScreen', { day: 'Suturday' })} /> */}
      </View>
    </View>
  )
}

export default Week

const styles = StyleSheet.create({})
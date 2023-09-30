import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import Male from './Male'
import Female from './Female'

const Gender = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const handleNext = () => {
    navigation.navigate('Exercise Screen', { gender: selectedGender })
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', }}>

      <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 , flexDirection:'row'}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
          Select Gender :
        </Text>
        <Text>  {' '}  </Text>
        <Button title='Male' onPress={() => setSelectedGender('Male Screen')} />
        <Text> {' '} </Text>
        <Button title='Female' onPress={() => setSelectedGender('Female Screen')} />
      </View>
        <Button  title="Next" onPress={handleNext} />
    </View>
  )
}

export default Gender

const styles = StyleSheet.create({})
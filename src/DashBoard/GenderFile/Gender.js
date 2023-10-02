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

      <View style={{ height: 150, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20, }}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Select Gender :
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: '', flexDirection:'row'}}>
          <Button title='Male' onPress={() => setSelectedGender('Male Screen')} />
            <Text>{' '}</Text>
          <Button title='Female' onPress={() => setSelectedGender('Female Screen')} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Button title="Next" onPress={handleNext} />
        </View>



        <Text>  {' '}  </Text>

      </View>

    </View>
  )
}

export default Gender

const styles = StyleSheet.create({})
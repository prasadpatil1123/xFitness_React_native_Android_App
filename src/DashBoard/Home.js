import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gender from './GenderFile/Gender'

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', padding: 20, backgroundColor: 'black', }}>
    {/* <Button title='Select Gender ' onPress={() => props.navigation.navigate('Gender Screen')} /> */}
    <View style={{ height: 300, width: 300, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
      <Gender navigation={navigation} />
      {/* <Button title='Male' onPress={() => props.navigation.navigate('Male Screen')} />
        <Button title='Female' onPress={() => props.navigation.navigate('Female Screen')} /> */}
    </View>
  </View>
  )
}

export default Home

const styles = StyleSheet.create({})
import { StyleSheet, View } from 'react-native'
import React from 'react'
import Exercise from '../Exercise'

const Female = ({navigation, route}) => {

  const gender = route.params.gender;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'pink', }}>
    <View style={{ height: 300, width: 300, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
      <Exercise navigation={navigation} />
    </View>
  </View>
  )
}

export default Female

const styles = StyleSheet.create({})
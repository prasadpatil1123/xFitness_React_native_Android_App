import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gender from './GenderFile/Gender'

const Home = ({navigation}) => {
  return (
      <Gender navigation={navigation} />
  )
}

export default Home

const styles = StyleSheet.create({})
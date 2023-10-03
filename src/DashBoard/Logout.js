import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from '../StartScreen/Welcome'

const Logout = ({navigation}) => {
  return (
    <Welcome navigation={navigation}/>
  )
}

export default Logout

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from '../DashBoard/Home';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
  
    const handleLogin = () => {
      if (email && password) {
        navigation.navigate('Home Screen')
      } else {
        alert('Please fill in both email and password fields.');
      }
    }

  return (
    <View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
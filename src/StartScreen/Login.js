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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#7cb9eB',
      }}>
      <View
        style={{
          height: 300,
          width: 300,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold'
          }}>
          Login Screen
        </Text>
        <Text> {' '} </Text>
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 20,
            paddingHorizontal: 10,
          }}
          placeholder='Email'
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 20,
            paddingHorizontal: 10,
          }}
          placeholder='Password'
          onChangeText={text => setpassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Text> {' '} </Text>
        <Button title='Login' onPress={handleLogin} />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
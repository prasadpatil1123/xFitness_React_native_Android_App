import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Login from './Login';

const SignUp = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
  
    const handleSignUp = () => {
      if (name && email && password) {
        navigation.navigate('Login Screen')
      } else {
        alert('Please fill in all fields.');
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
          height: 400,
          width: 400,
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
          SignUp Screen
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
          placeholder='Name'
          onChangeText={text => setName(text)}
          value={name}
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
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 20,
            paddingHorizontal: 10,
          }}
          placeholder='Confirm Password'
          onChangeText={text => setpassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Text> {' '} </Text>
        <Button
          title='Sign Up'
          onPress={handleSignUp}
        />
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'


const Login = ({ navigation }) => {

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
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View>
        <Image source={require("../assets/image/dumb1.jpeg")}
          style={styles.ImgBox}
        />
      </View>
      <View style={styles.LogBox}>
        <View>

          <Text style={styles.TxtQ} > Email Address</Text>
          <TextInput
            placeholder='Enter Email'
            style={styles.TxtA}
            onChangeText={text => setEmail(text)}
            value={email}
          />

          <Text style={styles.TxtQ} > Password</Text>
          <TextInput
            placeholder='Enter Password'
            onChangeText={text => setpassword(text)}
            value={password}
            secureTextEntry={true}
            style={styles.TxtA}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp Screen')}
          >
            <Text style={styles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            style={styles.LoginButton}
          >
            <Text style={styles.LoginButtonTxt}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ORtxt}>Or</Text>
        <View style={styles.SocialBox}>
          <TouchableOpacity style={styles.Tiles}>
            <Image source={require('../assets/icons/apple.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Tiles}>
            <Image source={require('../assets/icons/facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Tiles}>
            <Image source={require('../assets/icons/google.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.RemTxt}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp Screen')}
          >
            <Text style={styles.RemButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  ImgBox: { width: 350, height: 250, justifyContent: 'center', marginTop: 0, marginLeft: 25 },
  LogBox: {
    flex: 1, backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50
  },
  TxtQ: {
    marginTop: 30, marginLeft: 40, fontSize: 18, color: 'black'
  },
  TxtA: {
    marginLeft: 35, fontSize: 17, color: 'black', backgroundColor: '#e4e3e3', marginRight: 35, borderRadius: 35,
  },
  forgotText: {
    color: 'black', marginTop: 10, textAlign: 'right', marginRight: 37,
  },
  LoginButton: {
    backgroundColor: 'gold', borderRadius: 15, marginTop: 15, marginLeft: 35, marginRight: 35, padding: 15, color: 'black'
  },
  LoginButtonTxt: {
    textAlign: 'center', fontSize: 17, fontWeight: 'bold',
  },
  ORtxt: {
    textAlign: 'center', paddingTop: 19, paddingBottom: 19, color: 'black', fontSize: 18, fontWeight: 'bold'
  },
  SocialBox: {
    flexDirection: 'row', justifyContent: 'space-evenly'
  },
  Tiles: {
    padding: 5, backgroundColor: '#e4e3e3', borderRadius: 15
  },
  RemTxt: {
    color: 'black', marginTop: 20, textAlign: 'center'
  },
  RemButton: {
    textAlign: 'center', color: 'blue'
  },
})
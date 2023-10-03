import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState, } from 'react'
import Login from './Login';

const SignUp = ({ navigation }) => {

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
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View>
        <Image source={require("../assets/image/dumb1.jpeg")}
          style={styles.ImgBox}
        />
      </View>
      <View style={styles.SignBox}>
        <View>

          <Text style={styles.TxtQ} >Full Name</Text>
          <TextInput
            placeholder='Enter Full Name'
            style={styles.TxtA}
            onChangeText={text => setName(text)}
            value={name}
          />

          <Text style={styles.TxtQ} >Email Address</Text>
          <TextInput
            placeholder='Enter Email Address'
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
            onPress={handleSignUp}
            style={styles.SignUpButton}
          >
            <Text style={styles.SignUpButtonTxt}>Sign Up</Text>
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
          Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login Screen')}
          >
            <Text style={styles.RemButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  ImgBox: { width: 230, height: 150, justifyContent: 'center', marginLeft: 90 },
  SignBox: { marginTop: 50, flex: 1, backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50 },
  TxtQ: { marginTop: 30, marginLeft: 40, fontSize: 18, color: 'black' },
  TxtA: { marginLeft: 35, fontSize: 17, color: 'black', backgroundColor: '#e4e3e3', borderRadius: 15, marginRight: 35 },
  SignUpButton:{backgroundColor: 'gold', borderRadius: 15, marginTop: 15, marginLeft: 35, marginRight: 35, padding: 15, color: 'black'},
  SignUpButtonTxt:{ textAlign: 'center', fontSize: 17, fontWeight: 'bold',},
  ORtxt:{textAlign: 'center', paddingTop: 19, paddingBottom: 19, color: 'black', fontSize: 18, fontWeight: 'bold'},
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
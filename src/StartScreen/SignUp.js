import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, } from 'react'


const SignUp = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSignUp = () => {
    if (name && email && password) {
      navigation.navigate('Login Screen',{username:name})
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={styles.NoLogBox}>
        <Image source={require("../assets/image/FitnessAppLogin.png")}
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
  ImgBox: { width: 150, height: 150, justifyContent: 'center', marginTop: 0, marginLeft: 25,marginRight:25,borderRadius:50 },
  NoLogBox:{flex:1,alignItems:'center',justifyContent:'center'},
  SignBox: { flex: 3, backgroundColor: '#fcb045', borderRadius:50 },
  TxtQ: { marginTop: 25, 
    marginLeft: 40, 
    fontSize: 18, 
    color: 'black',
    fontWeight:'bold',
    paddingLeft:15,
    paddingBottom:5 },
  TxtA: {  marginLeft: 35,
    fontSize: 17, 
    color: 'black', 
    backgroundColor: '#e4e3e3', 
    marginRight: 35,
     borderRadius: 35,
     paddingLeft:25 },
  SignUpButton:{backgroundColor: 'black', borderRadius: 15, marginTop: 15, marginLeft: 35, marginRight: 35, padding: 15, },
  SignUpButtonTxt:{ textAlign: 'center', fontSize: 17, fontWeight: 'bold',color:'white'},
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
    textAlign: 'center', color: 'blue',fontSize:20,fontWeight:'bold'
  },
})
import { StyleSheet, Text, View, Button ,Image} from 'react-native'
import React from 'react'
import SignUp from './SignUp';
import Login from './Login';

const Welcome = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7cb9eB', }}>

            <View style={{ flex: 1, height: 250, width: 350, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 20, margin: 8 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50, width: 300, backgroundColor: '#ffba35', borderRadius: 30, margin: 30
                }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black' }}>
                        Fitness App
                    </Text>
                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 400,
                    height: 400,
                    borderRadius: 4,
                    margin: 8
                }}>
                    <Image
                        source={require('../assets/image/FitnessAppWelcome.png')}
                        style={{ width: 400, height: 400 }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button title='SignUp' onPress={() => navigation.navigate('SignUp Screen')} />
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button title='Login' onPress={() => navigation.navigate('Login Screen')} />
                </View>

                {/* <View style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        margin: 30,
       
      }}>
        <TouchableOpacity
          style={{
             borderRadius: 15,
            padding: 25,
          }}
          onPress={() => navigation.navigate('Gender Screen')}
        >
          <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold' }}>bypass</Text>
        </TouchableOpacity>
      </View> */}

            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})
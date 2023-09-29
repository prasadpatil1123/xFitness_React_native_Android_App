import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Monday = ({navigation}) => {
  return (
    <ScrollView >
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'black', }}>

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 25, marginBottom: 25 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'white'
          }}>
          Monday Exercise
        </Text>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,

        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Warm-Up')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Warm-Up</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Push-Ups')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Push-Ups</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Bodyweight Squats')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Bodyweight Squats</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Plank')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Plank</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Lunges')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Lunges</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Mountain Climbers')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Mountain Climbers</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Glute Bridges')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Glute Bridges</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Tricep Dips')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Tricep Dips</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Supermans')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Supermans</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('High Knees')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>High Knees</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Side Planks')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Side Planks</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height: '20%',
        width: '80%'
      }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Cool Down')}
        >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Cool Down</Text>
        </TouchableOpacity>
      </View>

    </View>
  </ScrollView>
  )
}

export default Monday

const styles = StyleSheet.create({})
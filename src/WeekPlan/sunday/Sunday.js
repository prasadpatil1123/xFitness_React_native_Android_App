import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Sunday = ({navigation}) => {
  return (
    <ScrollView >
    <View style={styles.main}>

      <View style={styles.heading}>
        <Text
          style={styles.headingTxt}>
          Sunday Exercise
        </Text>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Warm-Up')}
        >
          <Text style={styles.BoxTxt}>Warm-Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Push-Ups')}
        >
          <Text style={styles.BoxTxt}>Push-Ups</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Bodyweight Squats')}
        >
          <Text style={styles.BoxTxt}>Bodyweight Squats</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Plank')}
        >
          <Text style={styles.BoxTxt}>Plank</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Lunges')}
        >
          <Text style={styles.BoxTxt}>Lunges</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Mountain Climbers')}
        >
          <Text style={styles.BoxTxt}>Mountain Climbers</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Glute Bridges')}
        >
          <Text style={styles.BoxTxt}>Glute Bridges</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Tricep Dips')}
        >
          <Text style={styles.BoxTxt}>Tricep Dips</Text>
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

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('High Knees')}
        >
          <Text style={styles.BoxTxt}>High Knees</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Side Planks')}
        >
          <Text style={styles.BoxTxt}>Side Planks</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => navigation.navigate('Cool Down')}
        >
          <Text style={styles.BoxTxt}>Cool Down</Text>
        </TouchableOpacity>
      </View>

    </View>
  </ScrollView>
  )
}

export default Sunday

const styles = StyleSheet.create({
  main:{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'black', },
  heading:{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 25, marginBottom: 25 },
  headingTxt:{fontSize: 40,
    fontWeight: 'bold',
    color: 'white'},
  Box:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    height: '20%',
    width: '80%'
  },
  TouchBox:{
    borderRadius: 5,
    padding: 10,
  },
  BoxTxt:{ color: 'black', fontSize: 30, fontWeight: 'bold', },
})
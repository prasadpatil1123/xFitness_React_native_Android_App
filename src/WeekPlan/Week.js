import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
// import Sunday from './sunday/Sunday';

const Week = (props) => {
  return (
    <ScrollView style={{backgroundColor:'black'}}>
    <View style={styles.main}>

      <View style={styles.heading}>
        <Text
          style={styles.headingTxt}>
          Weekly Exercise
        </Text>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => props.navigation.navigate('Sunday')}
        >
          <Text style={styles.BoxTxt}>Sunday</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity
          style={styles.TouchBox}
          onPress={() => props.navigation.navigate('Monday')}
        >
          <Text style={styles.BoxTxt}>Monday</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  )
}

export default Week

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
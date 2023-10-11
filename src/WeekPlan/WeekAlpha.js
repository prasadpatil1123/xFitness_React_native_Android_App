import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
// import Sunday from './sunday/Sunday';

const DayBox = ({ title, onPress }) => (
  <View style={styles.Box}>
    <TouchableOpacity style={styles.TouchBox} onPress={onPress}>
      <Text style={styles.BoxTxt}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const WeekAlpha = ({ navigation }) => {

  const weeks = [
    { title: 'Sunday', navigateTo: 'Sunday' },
    { title: 'Monday', navigateTo: 'Monday' },
    { title: 'Tuesday', navigateTo: 'Tuesday' },
    { title: 'Wednesday', navigateTo: 'Wednesday' },
    { title: 'Thursday', navigateTo: 'Thursday' },
    { title: 'Friday', navigateTo: 'Friday' },
    { title: 'Saturday', navigateTo: 'Saturday' },

  ];

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Weekly Exercise</Text>
        </View>

        {weeks.map((day, index) => (
          <DayBox
            key={index}
            title={day.title}
            onPress={() => navigation.navigate(day.navigateTo)}
          // onPress={() => navigation.navigate('Week Screen',{selectedDay:exercise})}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default WeekAlpha

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'black', },
  heading: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 25, marginBottom: 25 },
  headingTxt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  Box: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    height: '20%',
    width: '80%'
  },
  TouchBox: {
    borderRadius: 5,
    padding: 10,
  },
  BoxTxt: { color: 'black', fontSize: 30, fontWeight: 'bold', },
})
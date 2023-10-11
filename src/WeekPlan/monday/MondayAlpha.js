import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const ExerciseBox = ({ title, onPress }) => (
  <View style={styles.Box}>
    <TouchableOpacity style={styles.TouchBox} onPress={onPress}>
      <Text style={styles.BoxTxt}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const MondayAlpha = ({navigation}) => {
  const exercises = [
    { title: 'Warm-Up', navigateTo: 'Warm-Up' },

    { title: 'Push-Ups', navigateTo: 'Push-Ups' },

    // Add other exercises here
    { title: 'Cool Down', navigateTo: 'Cool Down' },
  ];

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Monday Exercise</Text>
        </View>

        {exercises.map((exercise, index) => (
          <ExerciseBox
          key={index}
          title={exercise.title}
          onPress={() => navigation.navigate(exercise.navigateTo)}
          // onPress={() => navigation.navigate('Week Screen',{selectedDay:exercise})}
        />        
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'black' },
  heading: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 25, marginBottom: 25 },
  headingTxt: { fontSize: 40, fontWeight: 'bold', color: 'white' },
  Box: { flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 5, margin: 10, height: '20%', width: '80%' },
  TouchBox: { borderRadius: 5, padding: 10 },
  BoxTxt: { color: 'black', fontSize: 30, fontWeight: 'bold' },
  Pageheading: { flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20, backgroundColor: 'yellow', paddingHorizontal: 40, borderRadius: 15 },
  PageheadingText: { fontSize: 30, fontWeight: 'bold', color: 'black' },
  USEBOX: { backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', height: 200, width: 300, padding: 15, borderRadius: 20 },
  USEBOXTXT: { fontSize: 20, color: 'black', fontWeight: 'bold' },
  TIMERBOX: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'black', paddingVertical: 10, marginVertical: 15 },
  TIMERBOXTXT: { fontSize: 20, color: 'white' },
  DESBOX: { flex: 2, backgroundColor: 'black', justifyContent: 'space-evenly', alignItems: 'center', padding: 10 },
  GIFBOX: { flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 30 },
  DESBOXTXT: { fontSize: 25, color: 'white' },
  CARD: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(50,50,50,0.5)', alignItems: 'center' },
});

export default MondayAlpha


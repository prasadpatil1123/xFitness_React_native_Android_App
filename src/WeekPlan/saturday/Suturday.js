import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
// import { create } from 'react-test-renderer';

// Reusable component for touchable box
const ExerciseBox = ({ title, onPress }) => (
  <View style={styles.Box}>
    <TouchableOpacity
      style={styles.TouchBox}
      onPress={onPress}
    >
      <Text style={styles.BoxTxt}>{title}</Text>
    </TouchableOpacity>
  </View>
);

// Saturday component using ExerciseBox
const Saturday = ({ navigation }) => {
  const exercises = [
    { title: 'Warm-Up', navigateTo: 'Warm-Up' },

    { title: 'Push-Ups', navigateTo: 'Push-Ups' },
    { title: 'Bodyweight Squats', navigateTo: 'Bodyweight Squats' },
    { title: 'Plank', navigateTo: 'Plank' },
    { title: 'Lunges', navigateTo: 'Lunges' },
    { title: 'Mountain Climbers', navigateTo: 'Mountain Climbers' },
    { title: 'Glute Bridges', navigateTo: 'Glute Bridges' },
    { title: 'Tricep Dips', navigateTo: 'Tricep Dips' },
    { title: 'Supermans', navigateTo: 'Supermans' },
    { title: 'High Knees', navigateTo: 'High Knees' },
    { title: 'Side Planks', navigateTo: 'Side Planks' },


    // Add other exercises here
    { title: 'Cool Down', navigateTo: 'Cool Down' },
  ];

  return (
<ScrollView>
      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Saturday Exercise</Text>
        </View>

        {exercises.map((exercise, index) => (
          <ExerciseBox
            key={index}
            title={exercise.title}
            onPress={() => navigation.navigate(exercise.navigateTo)}
          />
        ))}
      </View>
    </ScrollView>
  );
};
export default Saturday
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

// import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

// import React from 'react'

// const Saturday = ({navigation}) => {
//   return (
//     <ScrollView >
//     <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'black', }}>

//       <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 25, marginBottom: 25 }}>
//         <Text
//           style={{
//             fontSize: 40,
//             fontWeight: 'bold',
//             color: 'white'
//           }}>
//           Suturday Exercise
//         </Text>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,

//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Warm-Up')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Warm-Up</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Push-Ups')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Push-Ups</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Bodyweight Squats')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Bodyweight Squats</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Plank')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Plank</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Lunges')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Lunges</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Mountain Climbers')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Mountain Climbers</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Glute Bridges')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Glute Bridges</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Tricep Dips')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Tricep Dips</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Supermans')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Supermans</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('High Knees')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>High Knees</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Side Planks')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Side Planks</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{
//         flex: 1,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         margin: 10,
//         height: '20%',
//         width: '80%'
//       }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 5,
//             padding: 10,
//           }}
//           onPress={() => navigation.navigate('Cool Down')}
//         >
//           <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', }}>Cool Down</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   </ScrollView>
//   )
// }

// export default Saturday

// const styles = StyleSheet.create({})
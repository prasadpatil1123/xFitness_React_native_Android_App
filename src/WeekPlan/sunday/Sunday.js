import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


const ExerciseBox = ({ title, onPress }) => (
  <View style={styles.Box}>
    <TouchableOpacity style={styles.TouchBox} onPress={onPress}>
      <Text style={styles.BoxTxt}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const Sunday = ({ navigation }) => {
  const exercises = [
    {
      title: 'Warm-Up',
      gifUrl: 'https://media.tenor.com/EYwxFtU_sNsAAAAC/goku-warm-up.gif',
      description: 'Jog in place or perform light cardio example jumping jacks, high knees, etc. to increase your heart rate and warm up your muscles.',
      footer: 'Increased Blood Flow,Improved Flexibility,Enhanced Range of Motion,Mental Preparation'
    },
    {
      title: 'Push-Ups',
      gifUrl: 'https://media.tenor.com/7RrdzMurW8IAAAAC/pushups.gif',
      description: 'Start in a plank position with hands shoulder-width apart.Lower your body until your chest almost touches the ground, then push back up.',
      footer: 'Quick and effective exercise to strengthen the upper body, including the chest, shoulders, and triceps, while improving overall core stability.',
    },
    {
      title: 'Bodyweight Squats',
      gifUrl: 'https://i.pinimg.com/originals/f9/db/a3/f9dba36451cab8b0b5be6d5ec9fd438a.gif',
      description: 'Stand with feet shoulder-width apart. Lower your hips by bending your knees and pushing your hips back, as if sitting in a chair. Keep your chest up and back straight.',
      footer: 'Functional Strength,Core Engagement,Calorie Burn,No Equipment Needed',
    },
    {
      title: 'Plank',
      gifUrl: 'https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif',
      description: 'Start in a push-up position with your forearms on the ground.Keep your body in a straight line from head to heels, engaging your core.',
      footer: 'Balance and Stability,Full Body Workout,Enhanced Metabolism,No Equipment Needed',
    },
    {
      title: 'Lunges',
      gifUrl: 'https://wm-blog-content.s3-us-west-2.amazonaws.com/MOVEMENTS/REVERSE-LUNGES.gif',
      description: 'Step forward with one leg and lower your body until both knees are bent at 90-degree angles.Push back to the starting position and switch legs.',
      footer: 'Engagement of Core Muscles,Calorie Burn and Weight Management,No Equipment Needed',
    },
    {
      title: 'Mountain Climbers',
      gifUrl: 'https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif',
      description: 'Start in a plank position. Alternate bringing your knees towards your chest in a running motion.',
      footer: 'Elevated Metabolism,Increased Breathing Capacity,Adaptable for All Fitness Levels,Cardiovascular Endurance',
    },
    {
      title: 'Glute Bridges',
      gifUrl: 'https://biqbandtraining.com/wp-content/uploads/2020/05/Glute-bridge-gif.gif',
      description: 'Lie on your back with knees bent and feet flat on the floor.Lift your hips towards the ceiling, squeezing your glutes at the top.',
      footer: 'Improved Athletic Performance, Reduced Lower Back Pain, Reduced Risk of Injury, Improved Hip Stability',
    },
    {
      title: 'Tricep Dips',
      gifUrl: 'https://media.tenor.com/Pvlmd3Y97goAAAAC/dips-tricep.gif',
      description: ' Find a stable surface or chair, bench and place your hands behind you with fingers pointing forward.Lower your body by bending your elbows, then push back up.',
      footer: 'Stability and Core Engagement,Triceps Activation,Functional Strength,Bodyweight Exercise',
    },
    {
      title: 'Supermans',
      gifUrl: 'https://images.huffingtonpost.com/2015-06-09-1433870729-8136082-Superman.gif',
      description: 'Lie face down with arms extended in front of you.Lift your arms, chest, and legs off the ground, squeezing your lower back muscles.',
      footer: 'Lower Back Strengtheninge,Enhances Spinal Flexibility,No Equipment Needed,Back Extension',
    },
    {
      title: 'High Knees',
      gifUrl: 'https://osuit.edu/student-life/files/workouts/high-knees.gif',
      description: 'Stand in place and run while lifting your knees towards your chest.',
      footer: 'Cardiovascular Endurance,Enhances Spinal Flexibility,Dynamic Warm-Up',
    },
    {
      title: 'Side Planks',
      gifUrl: 'https://i.makeagif.com/media/2-21-2014/LHF_Zd.gif',
      description: 'Lie on your side with your forearm supporting your body.Keep your body in a straight line and engage your oblique muscles.',
      footer: 'Engages Shoulder and Arm Muscles,Enhances Hip Strength,Reduces Risk of Lower Back Pain,Improved Balance and Stability',
    },
    {
      title: 'Cool Down',
      gifUrl: 'https://i.makeagif.com/media/12-13-2016/2G2Qfr.gif',
      description: 'Perform gentle stretches for each major muscle group, holding each stretch for 15-30 seconds.',
      footer: 'Increased Blood Flow,Improved Flexibility,Enhanced Range of Motion,Mental Preparation',
    },

    // Add other exercises here
  ];

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Sunday Exercise</Text>
        </View>

        {exercises.map((exercise, index) => (
          <ExerciseBox
            key={index}
            title={exercise.title}
            onPress={() => navigation.navigate(exercise.title)}
          />
        ))};

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

export default Sunday


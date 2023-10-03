import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
    <Image
        source={require('../../assets/image/FitnessAppWelcome.png')} // Replace with the actual path to your app's logo
        style={styles.logo}
        resizeMode="contain"
    />
    <Text style={styles.title}>Fitness App</Text>
    <Text style={styles.description}>
        Welcome to the Fitness App! We are dedicated to helping you achieve your fitness goals
        and lead a healthy lifestyle. Whether you are a beginner or an experienced fitness enthusiast,
        our app provides a variety of workout plans and exercises to suit your needs.
    </Text>
    <Text style={styles.developerInfo}>
        Developed by: Kashiprasad Patil
    </Text>
    {/* Add more information as needed */}
</View>
  )
}

export default About

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
logo: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    marginBottom: 20,
},
title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
},
description: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight:'500',
    fontSize:25
},
developerInfo: {
    marginTop: 30,
    fontStyle: 'italic',
    fontWeight:'500',
    fontSize:20
},
})
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';

const Share = ({contentToShare }) => {
  const handleShare = async () => {
    try {
        await Share.share({
            message: contentToShare,
        });
    } catch (error) {
        console.error('Error sharing content:', error.message);
    }
};
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Share Your Achievement</Text>
    <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share Now</Text>
    </TouchableOpacity>
</View>
  )
}

export default () => (
  <Share contentToShare="I just completed an intense workout! 💪 #FitnessApp" />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
shareButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
},
shareButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
})
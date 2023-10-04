import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share as RNShare } from 'react-native';

const ShareComponent = ({ contentToShare }) => {
  const handleShare = async () => {
    try {
      await RNShare.share({
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
  );
};

export default () => (
  <ShareComponent contentToShare="I just completed an intense workout! 💪 #FitnessApp" />
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
});

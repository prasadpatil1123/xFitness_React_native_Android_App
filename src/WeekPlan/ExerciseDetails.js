import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';

const ExerciseDetails = ({ title, gifUrl, description, footer, navigation }) => {
    const [show, setShow] = useState(false);
    const [timer, setTimer] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
  
    const toggleTimer = () => {
      setIsRunning(!isRunning);
    };
  
    useEffect(() => {
      let interval;
      if (isRunning && timer > 0) {
        interval = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
      } else if (timer === 0) {
        alert('Cheers !!! ');
      }
      return () => clearInterval(interval);
    }, [isRunning, timer]);
  
    return (
      <View style={styles.main}>
        <View style={styles.Pageheading}>
          <Text style={styles.PageheadingText}>{title}</Text>
        </View>
        <View style={styles.GIFBOX}>
          <FastImage
            source={{ uri: gifUrl, priority: FastImage.priority.normal }}
            style={{ width: 350, height: 200 }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
  
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {show ? (
            <View style={styles.CARD}>
              <View style={styles.USEBOX}>
                <Text style={styles.USEBOXTXT}>{footer}</Text>
                <Button title="Close" onPress={() => setShow(false)} />
              </View>
            </View>
          ) : null}
        </View>
  
        <View style={styles.DESBOX}>
          <Text style={styles.DESBOXTXT}>{description}</Text>
        </View>
  
        <View style={styles.TIMERBOX}>
          <Text style={styles.TIMERBOXTXT}>Time Remaining: {timer} seconds{'\n'}</Text>
          <Button title={isRunning ? 'Pause Timer' : 'Start Timer'} onPress={toggleTimer} />
        </View>
        <Button title="Benefits" onPress={() => setShow(true)} />
      </View>
    );
  };
  export default ExerciseDetails;

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
})
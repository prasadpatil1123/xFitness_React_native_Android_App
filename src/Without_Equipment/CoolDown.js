import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image';

const CoolDown = () => {

  const [show, setShow] = useState(false)
  const [timer, setTimer] = useState(60); // Set an initial time (60 seconds)
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
      <Text
        style={styles.PageheadingText}>
     Cool Down: 5-7 minutes
      </Text>
    </View>
    <View style={styles.GIFBOX}>
      <FastImage
        source={{
          uri: 'https://i.makeagif.com/media/12-13-2016/2G2Qfr.gif',
          priority: FastImage.priority.normal,
        }}
        style={{ width: 350, height: 200 }}
        resizeMode={FastImage.resizeMode.contain} // Adjust the resizeMode as needed
      />
    </View>

    <View style={{ flex: 1, justifyContent: 'center' }}>
      {
        show ?
          <View
            style={styles.CARD}>
            <View
              style={styles.USEBOX}>
              <Text style={styles.USEBOXTXT}>
              {'\u2022'}Increased Blood Flow{'\n'}
              {'\u2022'}Improved Flexibility{'\n'}
              {'\u2022'}Enhanced Range of Motion{'\n'}
              {'\u2022'}Mental Preparation{'\n'}
              </Text>
              <Button title='Close' onPress={() => setShow(false)} />
            </View>
          </View>
          : null
      }
    </View>

    <View
      style={styles.DESBOX}>

      <Text style={styles.DESBOXTXT}>
        {'\u2022'} Perform gentle stretches for each major muscle group, holding each stretch for 15-30 seconds.
      </Text>

    </View>

    <View style={styles.TIMERBOX}>
      <Text style={styles.TIMERBOXTXT}>Time Remaining: {timer} seconds{'\n'}</Text>
      <Button
        title={isRunning ? 'Pause Timer' : 'Start Timer'}
        onPress={toggleTimer}
      />
    </View>
    <Button title='Benefits' onPress={() => setShow(true)} />
  </View>
  )
}

export default CoolDown

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  Pageheading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'yellow',
    paddingHorizontal: 40,
    borderRadius: 15
  },
  PageheadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  USEBOX: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 300,
    padding: 15,
    borderRadius: 20,
  },
  USEBOXTXT: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  TIMERBOX: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    marginVertical: 15
  },
  TIMERBOXTXT: { fontSize: 20, color: 'white' },
  DESBOX: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10
  },
  GIFBOX: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  DESBOXTXT: {
    fontSize: 25,
    color: 'white'
  },
  CARD: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(50,50,50,0.5)',
    alignItems: 'center'
  },
})
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';

const BMI = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('');

    const calculateBMI = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);

        if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
            alert('Please enter valid weight and height values.');
            return;
        }

        const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
        setBMI(bmiValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={text => setWeight(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Height (m)"
                keyboardType="numeric"
                value={height}
                onChangeText={text => setHeight(text)}
            />
            {/* <Button title="Calculate BMI" onPress={calculateBMI} /> */}

            <TouchableOpacity
            onPress={calculateBMI}
            style={styles.SubmitButton}
          >
            <Text style={styles.SubmitButtonTxt}>Calculate BMI</Text>
          </TouchableOpacity>

            {bmi !== '' && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Your BMI: {parseFloat(bmi).toFixed(2)}</Text>
                </View>
            )}
        </View>
    );
};

export default BMI

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
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
    resultContainer: {
        marginTop: 20,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    SubmitButton:{backgroundColor: 'black', borderRadius: 15, marginTop: 15, marginLeft: 35, marginRight: 35, padding: 15, },
    SubmitButtonTxt:{ textAlign: 'center', fontSize: 17, fontWeight: 'bold',color:'white'},
})
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Gender = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const handleNext = () => {
    // navigation.navigate('Exercise', { gender: selectedGender })
    const nextScreen = selectedGender === 'Male Screen' ? 'Male' : 'Female';
    navigation.navigate(nextScreen, { gender: selectedGender });
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black',marginTop:250,marginBottom:250,borderRadius:60,marginLeft:30,marginRight:30 }}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
            Select Gender :
          </Text>
        </View>

        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',}}>
          <TouchableOpacity
            onPress={() => setSelectedGender('Male Screen')}
          >
            <View
                    style={styles.funBtn}
                >
                    <Text style={styles.textDesign}>Male</Text>
                </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedGender('Female Screen')}
          >
             <View
                    style={styles.funBtn}
                >
                    <Text style={styles.textDesign}>Female</Text>
                </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Button title="Next" onPress={handleNext} />
        </View>
      

    </View>
  )
}

export default Gender

const styles = StyleSheet.create({
  funBtn: {
    borderWidth: 10,
    height: 100,
    width: 100,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 25,
    backgroundColor: 'white',
    flexDirection: 'row'
},
  textDesign: {
    color: 'black',
    fontSize: 20,   
}
})
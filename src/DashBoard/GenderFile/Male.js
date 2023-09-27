import { StyleSheet, View } from 'react-native'
import React from 'react'
import Exercise from '../Exercise';

const Male = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'black', }}>
            <View style={{ height: 300, width: 300, backgroundColor: '#cfcfcf', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Exercise navigation={navigation} />
            </View>
        </View>
    )
}

export default Male

const styles = StyleSheet.create({})
import React from 'react'
import { View, Text, Image, TouchableOpacity, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <View>
                <Text style={styles.headTxt}>
                    Shape Up and Shine Bright!
                </Text>
                <View style={styles.ImgBox}>
                    <Image source={require("../assets/image/FitnessAppWelcome.png")}
                        style={{ width: 350, height: 350 }} />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp Screen')}
                    >
                        <Text style={styles.funBtn}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.botmText}>
                            Already have an account?{' '}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login Screen')}
                        >
                            <Text style={styles.botmBoldText}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    headTxt: {
        color: "white",
        paddingTop: 50,
        fontSize: 35,
        justifyContent: "center",
        textAlign: "center"
    },
    ImgBox: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 90
    },
    funBtn: {
        color: "black",
        textAlign: "center",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        backgroundColor: "#fcb045",
        margin: 10,
        marginTop: 60
    },
    botmText: {
        color: "white", margin: 2, textAlign: "center"
    },
    botmBoldText: {
        textAlign: "center", color: "white", fontWeight: "bold"
    }
})
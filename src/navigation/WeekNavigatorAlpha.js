import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WarmUp from '../Without_Equipment/WarmUp';
import CoolDown from '../Without_Equipment/CoolDown';

import WeekAlpha from '../WeekPlan/WeekAlpha';
import SundayAlpha from '../WeekPlan/sunday/SundayAlpha';
import MondayAlpha from '../WeekPlan/monday/MondayAlpha';
import WidePushUps from '../Without_Equipment/Intermediate/WidePushUps';

const WeekStack = createNativeStackNavigator();


const WeekNavigatorAlpha = (props) => {
    return (
        <WeekStack.Navigator>
            <WeekStack.Screen
                options={{
                    headerShown: true,
                    title: '',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                }} name="Week" component={WeekAlpha} />

            <WeekStack.Screen name="Sunday"
                options={{
                    headerShown: true,
                    title: '',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                }} component={SundayAlpha} />

            <WeekStack.Screen name="Monday"
                options={{
                    headerShown: true,
                    title: '',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                }} component={MondayAlpha} />


            <WeekStack.Screen name="Warm-Up"
                options={{
                    headerShown: true,
                    title: '',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                }} component={WarmUp} />


            <WeekStack.Screen name="Wide Push-Ups"
                options={{
                    headerShown: true,
                    title: '',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                }} component={WidePushUps} />

            <WeekStack.Screen name="Cool Down"
                options={{
                    headerShown: true,
                    title: '',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                }} component={CoolDown} />


        </WeekStack.Navigator>
    )
}

export default WeekNavigatorAlpha
// docs.expo.io @ routing
// react navigation.org
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Occurrences from './pages/Occurrences';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Occurrences" component={Occurrences} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}
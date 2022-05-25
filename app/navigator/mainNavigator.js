import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, Login } from '../containers';
import { stackNavigator, tabNavigator } from './nameNavigator';
import BottonTab from './bottonNavigator';

const Stack = createNativeStackNavigator();

// function MainNavigator() {
//     return (
//         <NavigationContainer>
//             {/* <Stack.Navigator initialRouteName={stackNavigator.HOME}>
//                 <Stack.Screen
//                     name={stackNavigator.HOME}
//                     component={TabHome}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen
//                     name={stackNavigator.DETAILS}
//                     component={DetailsScreen}
//                     options={{ headerShown: false }}
//                 />
//             </Stack.Navigator> */}
//             <BottonTab />
//         </NavigationContainer>
//     );
// }

class MainNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={stackNavigator.LOGIN}>
                    {/* BOTTON TAB */}
                    <Stack.Screen
                        name={stackNavigator.BOTTON_TAB}
                        component={BottonTab}
                        options={{ headerShown: false }}
                    />
                    {/* Add screen */}
                    {/* EXTRA */}
                    <Stack.Screen
                        name={stackNavigator.DETAILS}
                        component={DetailsScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={stackNavigator.LOGIN}
                        component={Login}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default MainNavigator;

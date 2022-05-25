import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailsScreen, TabHome, TabProfile, TabAcount } from '../containers';
import { stackNavigator, tabNavigator } from './nameNavigator';
import { MyTabBar } from '../components';

const Tab = createBottomTabNavigator();

class BottonTab extends React.Component {
    render() {
        return (
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen
                    name={tabNavigator.TAB_HOME}
                    component={TabHome}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name={tabNavigator.TAB_PROFILE}
                    component={TabProfile}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name={tabNavigator.TAB_ACCOUNT}
                    component={TabAcount}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        );
    }
}

export default BottonTab;

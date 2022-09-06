import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomePage from '../Screens/home/HomePage';
import SettingPage from '../Screens/settings/SettingPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="News"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingPage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="settings" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

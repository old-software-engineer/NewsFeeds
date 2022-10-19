import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/components/Navigation/BottomNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetails from './src/components/Screens/newsDetails/NewsDetails';

const linking = {
  prefixes: ['newsapp://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: {
        path: 'home',
      },
      Details: {
        path: 'details',
      },
    },
  },
};

const Stack = createNativeStackNavigator();

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={NewsDetails}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;

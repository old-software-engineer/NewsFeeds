import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/components/Navigation/BottomNavigation';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;

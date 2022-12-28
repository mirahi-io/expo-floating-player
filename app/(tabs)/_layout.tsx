import {Tabs} from 'expo-router';
import React from 'react';
import {CustomBottomTabBar} from '../../components/CustomBottomTabBar';
import {Routes} from '../../routes.types';
import {StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      initialRouteName={Routes.HOME}
      tabBar={CustomBottomTabBar}
      sceneContainerStyle={styles.container}
      screenOptions={{
        tabBarActiveTintColor: '#0044C3',
        headerTintColor: '#0044C3',
      }}>
      <Tabs.Screen
        name={Routes.HOME}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: props => <MaterialIcons name="home-filled" {...props} />,
        }}
      />
      <Tabs.Screen
        name={Routes.LIBRARY}
        options={{
          title: 'Library',
          tabBarLabel: 'Library',
          tabBarIcon: props => (
            <MaterialIcons name="library-music" {...props} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});

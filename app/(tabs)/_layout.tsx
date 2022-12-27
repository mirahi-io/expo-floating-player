import {Tabs} from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{title: 'Home', tabBarLabel: 'Home'}}
      />
      <Tabs.Screen
        name="library"
        options={{title: 'Library', tabBarLabel: 'Library'}}
      />
    </Tabs>
  );
}

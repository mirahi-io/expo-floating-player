import {Tabs} from 'expo-router';
import React from 'react';
import {CustomBottomTabBar} from '../../components/CustomBottomTabBar';
import {Routes} from '../../routes.types';
import {useInitPlayer} from '../../player.utils';

export default function Layout() {
  return (
    <Tabs initialRouteName={Routes.HOME} tabBar={CustomBottomTabBar}>
      <Tabs.Screen
        name={Routes.HOME}
        options={{title: 'Home', tabBarLabel: 'Home'}}
      />
      <Tabs.Screen
        name={Routes.LIBRARY}
        options={{title: 'Library', tabBarLabel: 'Library'}}
      />
    </Tabs>
  );
}

import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {FloatingPlayer} from './FloatingPlayer';
import {View} from 'react-native';
import React from 'react';

export const CustomBottomTabBar = (props: BottomTabBarProps) => (
  <View>
    <FloatingPlayer />
    <BottomTabBar {...props} />
  </View>
);

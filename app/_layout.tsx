import {Stack} from 'expo-router';
import React from 'react';
import {Routes} from '../routes.types';
import {useInitPlayer} from '../player.utils';

export default function Layout() {
  useInitPlayer();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen
        name={Routes.PLAYER}
        options={{title: 'Player', presentation: 'modal'}}
      />
    </Stack>
  );
}

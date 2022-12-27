import {Stack} from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen
        name="player"
        options={{title: 'Player', presentation: 'modal'}}
      />
    </Stack>
  );
}

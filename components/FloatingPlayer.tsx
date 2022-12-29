import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {usePlayerControls} from '../player.utils';
import {Routes} from '../routes.types';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import {playerStyles} from './component.styles';

export const FloatingPlayer = ({navigation: {navigate}}: BottomTabBarProps) => {
  const {
    currentTrackIndex,
    currentTrack,
    controls: {isPlaying, startTrack, position, duration},
  } = usePlayerControls();

  if (!currentTrack) {
    return null;
  }

  const {artist, title} = currentTrack;

  const playerPressHandler = () =>
    navigate(Routes.PLAYER, {
      index:
        currentTrackIndex && currentTrackIndex >= 0 ? currentTrackIndex : 0,
      position: position,
    });

  return (
    <View style={playerStyles.floating_container}>
      <Pressable
        style={playerStyles.centered_row_space_between}
        onPress={playerPressHandler}
        testID="floating-player-container">
        <Text style={playerStyles.title_minimal}>
          {title} - {artist}
        </Text>
        <MaterialIcons
          // label necessary for Maestro to detect the text on the floating player
          accessibilityLabel={isPlaying ? 'play-arrow' : 'pause'}
          style={playerStyles.icons_minimal}
          name={isPlaying ? 'play-arrow' : 'pause'}
          size={40}
          onPress={startTrack}
        />
      </Pressable>
      <Slider
        minimumTrackTintColor="#FFF"
        maximumTrackTintColor="#BAC0CA"
        thumbTintColor="#FFF"
        maximumValue={duration}
        minimumValue={0}
        value={position}
      />
    </View>
  );
};

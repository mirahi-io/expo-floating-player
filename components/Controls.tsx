import {View} from 'react-native';
import React, {FC} from 'react';
import Slider from '@react-native-community/slider';
import {Controls as ControlProps} from '../player.utils';
import {MaterialIcons} from '@expo/vector-icons';
import {playerStyles} from './component.styles';

export const Controls: FC<ControlProps> = ({
  startTrack,
  skipToNextTrack,
  skipToPreviousTrack,
  duration,
  position,
  isPlaying,
}) => {
  return (
    <View>
      <Slider
        minimumTrackTintColor="#F73655"
        thumbTintColor="#F73655"
        maximumTrackTintColor="#BAC0CA"
        maximumValue={duration}
        minimumValue={0}
        value={position}
      />
      <View style={playerStyles.row_spaced_evenly}>
        <MaterialIcons
          style={playerStyles.icons}
          name="skip-previous"
          onPress={skipToPreviousTrack}
          size={64}
        />
        <MaterialIcons
          style={playerStyles.icons}
          name={isPlaying ? 'play-arrow' : 'pause'}
          size={64}
          onPress={startTrack}
        />
        <MaterialIcons
          style={playerStyles.icons}
          name="skip-next"
          onPress={skipToNextTrack}
          size={64}
        />
      </View>
    </View>
  );
};

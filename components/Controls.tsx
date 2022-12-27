import {Button, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import Slider from '@react-native-community/slider';
import {Controls as ControlProps} from '../player.utils';

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
      <Slider maximumValue={duration} minimumValue={0} value={position} />
      <View style={styles.row_spaced_evenly}>
        <Button title="prev" onPress={skipToPreviousTrack} />
        <Button title={isPlaying ? 'play' : 'pause'} onPress={startTrack} />
        <Button title="next" onPress={skipToNextTrack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row_spaced_evenly: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

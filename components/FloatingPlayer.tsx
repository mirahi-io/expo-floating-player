import {Alert, Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {usePlayerControls} from '../../../services/player/player.utils';

export const FloatingPlayer = () => {
  // const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const {
    currentTrackIndex,
    currentTrack,
    controls: {isPlaying, startTrack, position, duration},
  } = usePlayerControls();

  if (!currentTrack) {
    return null;
  }

  const {artist, title} = currentTrack;

  const playerPressHandler = () => {
    Alert.alert('Open player');
  };
  // navigate(Routes.PLAYER, {
  //   index:
  //     currentTrackIndex && currentTrackIndex >= 0 ? currentTrackIndex : 0,
  //   position: position,
  //   queue: songs,
  // });

  return (
    <Pressable onPress={playerPressHandler}>
      <View style={styles.container}>
        <View style={styles.centered_row_space_between}>
          <Text>
            {title} - {artist}
          </Text>
          <Button title={isPlaying ? 'play' : 'pause'} onPress={startTrack} />
        </View>
        <Slider maximumValue={duration} minimumValue={0} value={position} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centered_row_space_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#cecece',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

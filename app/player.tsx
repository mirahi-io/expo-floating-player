import React, {FC, useEffect} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {RootStackScreenProps, Routes} from '../routes.types';
import {usePlayerControls} from '../player.utils';
import {Controls} from '../components/Controls';
import {songs} from '../songs';
import {playerStyles} from '../components/component.styles';

const Player: FC<RootStackScreenProps<Routes.PLAYER>> = ({
  route: {
    params: {position = 0, index},
  },
}) => {
  const {controls, currentTrack} = usePlayerControls();

  useEffect(() => {
    const handleQueue = async () => {
      await TrackPlayer.add(songs);
      if (index >= 0) {
        await TrackPlayer.skip(index);
      }
      if (position > 0) {
        await TrackPlayer.seekTo(position);
      }
    };

    handleQueue();
  }, [index, position]);

  if (!currentTrack) {
    return <ActivityIndicator style={playerStyles.centered_horizontal} />;
  }

  return (
    <View style={playerStyles.centered_horizontal}>
      {currentTrack.artwork && typeof currentTrack.artwork === 'string' && (
        <Image
          resizeMode="cover"
          style={[playerStyles.image_container, playerStyles.image_dimensions]}
          source={{uri: currentTrack.artwork}}
        />
      )}
      <Text style={[playerStyles.title_container, playerStyles.title]}>
        {currentTrack.title} - {currentTrack.artist}
      </Text>
      <Controls {...controls} />
    </View>
  );
};

export default Player;

import React, {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useLink} from 'expo-router';
import {RootStackScreenProps, Routes} from '../../routes.types';
import {songs} from '../../songs';

const HomeScreen: FC<RootStackScreenProps<Routes.HOME>> = () => {
  const {push} = useLink();

  return (
    <View style={styles.centered_horizontal}>
      <Button
        title="Open player"
        onPress={() =>
          push({
            pathname: 'player',
            params: {index: 0, queue: songs},
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered_horizontal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

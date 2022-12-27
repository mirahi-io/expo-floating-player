import React, {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackScreenProps, Routes} from '../../routes.types';
import {useInitPlayer} from '../../player.utils';

const HomeScreen: FC<RootStackScreenProps<Routes.HOME>> = ({
  navigation: {navigate},
}) => {
  useInitPlayer();

  return (
    <View style={styles.centered_horizontal}>
      <Button
        title="Open player"
        onPress={() => navigate(Routes.PLAYER, {index: 0})}
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

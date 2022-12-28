import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackScreenProps, Routes} from '../../routes.types';
import {useInitPlayer} from '../../player.utils';

const HomeScreen: FC<RootStackScreenProps<Routes.HOME>> = ({
  navigation: {navigate},
}) => {
  useInitPlayer();

  return (
    <View style={styles.centered_horizontal}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.button_pressed : undefined,
        ]}
        onPress={() => navigate(Routes.PLAYER, {index: 0})}>
        {({pressed}) => (
          <Text
            style={[
              styles.button_title,
              pressed ? styles.title_pressed : undefined,
            ]}>
            Open player
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title_pressed: {
    color: '#FFF',
  },
  button_pressed: {
    backgroundColor: '#F73655',
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#F73655',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  button_title: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#F73655',
  },
  centered_horizontal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

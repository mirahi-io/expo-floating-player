import {NativeStackScreenProps} from 'react-native-screens/native-stack';

export enum Routes {
  HOME = 'index',
  PLAYER = 'player',
  LIBRARY = 'library',
}

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.PLAYER]: {index: number; position?: number};
  [Routes.LIBRARY]: undefined;
};

export type RootStackScreenProps<T extends Routes> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

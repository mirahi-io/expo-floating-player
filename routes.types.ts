import {NativeStackScreenProps} from 'react-native-screens/native-stack';

export enum Routes {
  ROOT = 'root',
  PLAYER = 'player',
  HOME = 'home',
}

export type RootStackParamList = {
  [Routes.ROOT]: undefined;
  [Routes.PLAYER]: {index: number; position?: number; queue: any[]};
  [Routes.HOME]: undefined;
};

export type RootStackScreenProps<T extends Routes> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

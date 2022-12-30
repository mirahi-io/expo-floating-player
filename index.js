import 'expo-router/entry';
import {PlaybackService} from './service';
import TrackPlayer from 'react-native-track-player';

TrackPlayer.registerPlaybackService(() => PlaybackService);

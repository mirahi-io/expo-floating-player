import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import TrackPlayer, {
  Event,
  State,
  Track,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {songs} from './songs';

export const useInitPlayer = () => {
  useEffect(() => {
    TrackPlayer.setupPlayer().catch(() => console.log('todo: handle errors'));

    return () => {
      TrackPlayer.isServiceRunning().then(running => {
        if (running) {
          return TrackPlayer.reset().catch(() =>
            console.log('todo: handle errors'),
          );
        }
      });
    };
  }, []);
};

export type Controls = {
  position: number;
  isPlaying: boolean;
  duration: number;
  startTrack: () => Promise<void>;
  skipToNextTrack: () => Promise<void>;
  skipToPreviousTrack: () => Promise<void>;
};

export type UsePlayerControlsResponse = {
  currentTrack?: Track;
  currentTrackIndex?: number;
  setCurrentTrack: Dispatch<SetStateAction<Track | undefined>>;
  controls: Controls;
};

export const usePlayerControls = (): UsePlayerControlsResponse => {
  const [playerState, setPlayerState] = useState<State>();
  const [currentTrack, setCurrentTrack] = useState<Track>();
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>();

  useEffect(() => {
    TrackPlayer.isServiceRunning().then(running => {
      if (running && !currentTrack) {
        TrackPlayer.getCurrentTrack().then(index => {
          if (index != null) {
            setCurrentTrackIndex(index);
            setCurrentTrack(songs[index]);
          }
        });
      }
    });
  }, [currentTrack]);

  useTrackPlayerEvents(
    [Event.PlaybackTrackChanged, Event.PlaybackState],
    async event => {
      if (
        event.type === Event.PlaybackTrackChanged &&
        event.nextTrack != null
      ) {
        const track = await TrackPlayer.getTrack(event.nextTrack);

        if (track) {
          if (track.url !== currentTrack?.url) {
            setCurrentTrack(track);
          }
          if (currentTrackIndex !== event.nextTrack) {
            setCurrentTrackIndex(event.nextTrack);
          }
        }
      }
      if (event.type === Event.PlaybackState) {
        setPlayerState(event.state);
      }
    },
  );

  const {position, duration} = useProgress();

  const skipToNextTrack = () => TrackPlayer.skipToNext();
  const skipToPreviousTrack = () => TrackPlayer.skipToPrevious();
  const startTrack = async () => {
    const state = await TrackPlayer.getState();
    if (state !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  };

  return {
    controls: {
      startTrack,
      skipToNextTrack,
      skipToPreviousTrack,
      duration: duration || 25,
      isPlaying:
        playerState !== State.Playing && playerState !== State.Buffering,
      position,
    },
    currentTrack,
    currentTrackIndex,
    setCurrentTrack,
  };
};

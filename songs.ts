import {Track} from 'react-native-track-player';

const ARTWORK_BASE_URL = 'https://source.unsplash.com/random/400?animals&sig=';
const SONG_BASE_URL = 'https://bigsoundbank.com/UPLOAD/mp3/';

export const songs: Track[] = Array.from(Array(15)).map((_, index) => ({
  album: 'free sound',
  artist: 'bigsoundbank',
  artwork: `${ARTWORK_BASE_URL}${index}`,
  date: new Date().toISOString(),
  duration: 26,
  title: (index + 1).toString().padStart(4, '0'),
  url: `${SONG_BASE_URL}${(index + 1).toString().padStart(4, '0')}.mp3`,
}));

import {StyleSheet} from 'react-native';

export const playerStyles = StyleSheet.create({
  title: {
    color: '#0044C3',
    fontSize: 16,
    fontWeight: '600',
  },
  title_minimal: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  icons: {
    color: '#0044C3',
  },
  icons_minimal: {
    color: '#FFF',
  },
  centered_row_space_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  floating_container_pressed: {
    backgroundColor: '#F73655E5',
  },
  floating_container: {
    backgroundColor: '#F73655',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  row_spaced_evenly: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  centered_horizontal: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 12,
    justifyContent: 'center',
  },
  title_container: {
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  image_container: {
    marginBottom: 16,
  },
  image_dimensions: {
    width: '100%',
    height: 500,
  },
});

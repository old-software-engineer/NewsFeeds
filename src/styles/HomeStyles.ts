import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    margin: 10,
    elevation: 5,
    padding: 10,
    borderRadius: 10,
  },
  title: {fontSize: 17, fontWeight: '500'},
  cardImage: {width: '100%', height: 300, marginVertical: 20},
  cardDescription: {fontWeight: '200'},
  marginTop: {marginTop: 20},
  centerMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '60%',
  },
  bold: {fontWeight: '700'},
});

export default homeStyles;

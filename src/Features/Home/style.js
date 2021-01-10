/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const Radius = 35;

export const HomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    height: 200,
    backgroundColor: '#8795AF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: 30,
  },
  HeroContainer: {
    marginTop: 50,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  HeroImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  ButtonHeroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ButtonContainer: {
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  firstButton: {
    backgroundColor: 'white',
  },
  secondButton: {
    backgroundColor: '#5374FF',
  },
  namaOrang: {
    fontSize: 20,
  },
  bagianAtas: {
    flexDirection: 'row',
  },
  jobPerson: {
    fontSize: 13,
    opacity: 0.5,
  },
  bioData: {
    paddingLeft: 28,
  },
  statusData: {
    flexDirection: 'row',
    backgroundColor: '#d8ecf2',
    marginTop: 17,
    height: 60,
    width: '83%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  articleStyle: {
    fontSize: 20,
    padding: 5,
  },

  midContainer: {
    marginTop: 90,
  },

  workExp: {
    flexDirection: 'row',
    padding: 5,
  },
  orbs: {
    padding: 5,
  },
  workImg: {
    width: 180,
    height: 120,
    borderRadius: 20,
  },
  lowerComponent: {
    backgroundColor: '#5d7e8f',
    height: 110,
    width: 350,
    marginLeft: 20,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 30,
    marginTop: 10,
    color: 'white',
  },
  feat: {
    backgroundColor: '#506c7a',
    color: 'white',
    padding: 6,
    width: 120,
    borderRadius: 10,
  },
});

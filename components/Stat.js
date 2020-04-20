import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import IconFMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

const lastUpdate = ' Last Updated: 4/15/2020 02:00AM (CET)';
const Stat = props => {
  return (
    <View style={styles.popUp}>
      <View style={styles.popUpFlagWrapper}>
        <Image
          style={styles.popUpFlag}
          source={{
            uri: props.popUpFlagUri,
          }}
        />
        <View style={styles.popUpFlagText}>
          <IconMI name="people" size={20} style={{textAlign: 'center'}} />
          <Text style={{textAlign: 'center', marginLeft: '3%'}}>
            {(props.popUpPopulation / 1000000).toFixed(2) + 'M'}
          </Text>
        </View>
      </View>
      <Text />
      <View style={styles.lastUpdateContainer}>
        <Text style={styles.lastUpdate}>{lastUpdate}</Text>
      </View>
      <View style={styles.popUpTextWrapper}>
        <View style={styles.popUpStatsTextView}>
          <IconFMCI
            name="hospital-building"
            size={20}
            style={{textAlign: 'center'}}
          />
          <Text style={[styles.popUpStatsText]}>{props.popUpCases}</Text>
        </View>
        <View style={styles.popUpStatsTextView}>
          <IconFMCI name="skull" size={24} style={{textAlign: 'center'}} />
          <Text style={[styles.popUpStatsText]}>{props.popUpDeaths}</Text>
        </View>
        <View style={styles.popUpStatsTextView}>
          <IconFMCI name="hospital" size={24} style={{textAlign: 'center'}} />
          <Text style={[styles.popUpStatsText]}>{props.popUpRecovered}</Text>
        </View>
        <View style={styles.popUpStatsTextView}>
          <View style={styles.popUpIconWrapper}>
            <IconFMCI
              name="hospital-building"
              size={20}
              style={{textAlign: 'center'}}
            />
            <Text>/</Text>
            <IconMI name="people" size={20} style={{textAlign: 'center'}} />
          </View>
          <Text style={[styles.popUpStatsText]}>{props.popUpCasesPer1M}</Text>
        </View>
        <View style={styles.popUpStatsTextView}>
          <View style={styles.popUpIconWrapper}>
            <IconFMCI name="skull" size={20} style={{textAlign: 'center'}} />
            <Text>/</Text>
            <IconMI name="people" size={20} style={{textAlign: 'center'}} />
          </View>
          <Text style={[styles.popUpStatsText]}>{props.popUpDeathsPer1M}</Text>
        </View>
        <View style={styles.popUpStatsTextView}>
          <View style={styles.popUpIconWrapper}>
            <IconFMCI name="hospital" size={20} style={{textAlign: 'center'}} />
            <Text>/</Text>
            <IconMI name="people" size={20} style={{textAlign: 'center'}} />
          </View>
          <Text style={[styles.popUpStatsText]}>
            {props.popUpRecoveredPer1M}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popUp: {
    width: '95%',
    marginLeft: '2.5%',
    height: '95%',
    flexDirection: 'row',
  },
  popUpFlagWrapper: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUpFlag: {
    overflow: 'hidden',
    width: 80,
    height: 80,
    borderRadius: 200,
  },
  popUpFlagText: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: '5%',
    paddingRight: '5%',
    padding: '2%',
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Medium',
  },
  popUpTextWrapper: {
    width: '75%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  popUpStatsTextView: {
    width: '30%',
    height: '30%',
    marginTop: '1 %',
    marginBottom: '1%',
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUpIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  popUpStatsText: {
    textAlign: 'center',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0.2,
    fontFamily: 'Roboto-Medium',
  },
  lastUpdateContainer: {
    marginLeft: '25%',
    width: '50%',
    height: 15,
    marginTop: '1%',
    borderRadius: 12,
    position: 'absolute',
  },
  lastUpdate: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Roboto-Light',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0.2,
    color: '#1D1E1D',
  },
});

export default Stat;

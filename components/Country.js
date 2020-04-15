import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Country = props => {
  const onPressButton = () => {
    props.setPopUpFlagUri(props.coFlagUri);
    props.setPopUpPopulation(props.coPopulation);
    props.setPopUpCases(props.coCase);
    props.setPopUpDeaths(props.coDeath);
    props.setPopUpRecovered(props.coRecover);
    props.setPopUpCasesPer1M(
      (props.coCase / (props.coPopulation / 1000000).toFixed()).toFixed(),
    );
    props.setPopUpDeathsPer1M(
      (props.coDeath / (props.coPopulation / 1000000).toFixed()).toFixed(),
    );
    props.setPopUpRecoveredPer1M(
      (props.coRecover / (props.coPopulation / 1000000).toFixed()).toFixed(),
    );
    props.callback(1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flagTouch} onPress={onPressButton}>
        <Image
          style={styles.flag}
          source={{
            uri: props.coFlagUri,
          }}
        />
      </TouchableOpacity>
      <View style={styles.flagStats}>
        <Text style={styles.flagTitle}>{props.coName}</Text>
        <Text style={styles.flagText}>{props.coValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 100,
    alignItems: 'center',
    marginTop: '2%',
    marginBottom: '3%',
  },
  flagTouch: {
    width: '90%',
    height: 80,
    marginTop: '3%',
  },
  flag: {
    width: '90%',
    height: 80,
    borderRadius: 12,
    marginLeft: '5%',
  },
  flagStats: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-10%',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  flagTitle: {
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 14,
    color: '#2E302F',

    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0.2,
    fontFamily: 'Roboto-Bold',
  },
  flagText: {
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0.2,
    marginBottom: '2%',

    fontFamily: 'Roboto-Regular',
  },
});

export default Country;

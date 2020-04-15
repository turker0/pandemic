import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import Country from './Country';

const lastUpdate = ' Last Updated: 4/15/2020 02:00AM (CET)';
const headerContext =
  "Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The disease was first identified in December 2019 in Wuhan, the capital of China's Hubei province, and has since spread globally, resulting in the ongoing 2019/20 coronavirus pandemic";
const headerContext2 =
  'Common symptoms include fever, cough, and shortness of breath. Other symptoms may include fatigue, muscle pain, diarrhea, sore throat, loss of smell, and abdominal pain. The time from exposure to onset of symptoms is typically around five days but may range from two to fourteen days. While the majority of cases result in mild symptoms, some progress to viral pneumonia and multi-organ failure';

const Header = props => {
  return (
    <View style={styles.header}>
      <ScrollView
        style={styles.headerScroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>COVID-19</Text>
          <Text style={styles.haderContext}>{headerContext}</Text>
          <Text style={styles.haderContext}>{headerContext2}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const PopUp = props => {
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

import IconFMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
const output1 = [],
  output2 = [],
  output3 = [];

const Context = () => {
  const db = require('../database/database.json');
  let db2String = JSON.stringify(db);
  let db3String = JSON.stringify(db);
  let db2 = JSON.parse(db2String);
  let db3 = JSON.parse(db3String);

  db2.sort(function(a, b) {
    return a.coDeath - b.coDeath;
  });

  db3.sort(function(a, b) {
    return a.coRecover - b.coRecover;
  });

  const [popUp, setPopUp] = useState(0);
  const [popUpFlagUri, setPopUpFlagUri] = useState(0);
  const [popUpPopulation, setPopUpPopulation] = useState(0);
  const [popUpCases, setPopUpCases] = useState(0);
  const [popUpDeaths, setPopUpDeaths] = useState(0);
  const [popUpRecovered, setPopUpRecovered] = useState(0);
  const [popUpCasesPer1M, setPopUpCasesPer1M] = useState(0);
  const [popUpDeathsPer1M, setPopUpDeathsPer1M] = useState(0);
  const [popUpRecoveredPer1M, setPopUpRecoveredPer1M] = useState(0);

  for (let i = 0; i < db.length; i++) {
    output1[i] = (
      <Country
        callback={setPopUp}
        coName={db[i].coName}
        coCase={db[i].coCase}
        coValue={db[i].coCase}
        coDeath={db[i].coDeath}
        coRecover={db[i].coRecover}
        coFlagUri={db[i].coFlagUri}
        coPopulation={db[i].coPopulation}
        setPopUpFlagUri={setPopUpFlagUri}
        setPopUpPopulation={setPopUpPopulation}
        setPopUpCases={setPopUpCases}
        setPopUpDeaths={setPopUpDeaths}
        setPopUpRecovered={setPopUpRecovered}
        setPopUpCasesPer1M={setPopUpCasesPer1M}
        setPopUpDeathsPer1M={setPopUpDeathsPer1M}
        setPopUpRecoveredPer1M={setPopUpRecoveredPer1M}
      />
    );

    output2[db2.length - (i + 1)] = (
      <Country
        callback={setPopUp}
        coName={db2[i].coName}
        coCase={db2[i].coCase}
        coValue={db2[i].coDeath}
        coDeath={db2[i].coDeath}
        coRecover={db2[i].coRecover}
        coFlagUri={db2[i].coFlagUri}
        coPopulation={db2[i].coPopulation}
        setPopUpFlagUri={setPopUpFlagUri}
        setPopUpPopulation={setPopUpPopulation}
        setPopUpCases={setPopUpCases}
        setPopUpDeaths={setPopUpDeaths}
        setPopUpRecovered={setPopUpRecovered}
        setPopUpCasesPer1M={setPopUpCasesPer1M}
        setPopUpDeathsPer1M={setPopUpDeathsPer1M}
        setPopUpRecoveredPer1M={setPopUpRecoveredPer1M}
      />
    );

    output3[db3.length - (i + 1)] = (
      <Country
        callback={setPopUp}
        coName={db3[i].coName}
        coCase={db3[i].coCase}
        coValue={db3[i].coRecover}
        coDeath={db3[i].coDeath}
        coRecover={db3[i].coRecover}
        coFlagUri={db3[i].coFlagUri}
        coPopulation={db3[i].coPopulation}
        setPopUpFlagUri={setPopUpFlagUri}
        setPopUpPopulation={setPopUpPopulation}
        setPopUpCases={setPopUpCases}
        setPopUpDeaths={setPopUpDeaths}
        setPopUpRecovered={setPopUpRecovered}
        setPopUpCasesPer1M={setPopUpCasesPer1M}
        setPopUpDeathsPer1M={setPopUpDeathsPer1M}
        setPopUpRecoveredPer1M={setPopUpRecoveredPer1M}
      />
    );
  }

  return (
    <View>
      <View style={styles.container}>
        {popUp ? (
          <PopUp
            popUpFlagUri={popUpFlagUri}
            popUpPopulation={popUpPopulation}
            popUpCases={popUpCases}
            popUpDeaths={popUpDeaths}
            popUpRecovered={popUpRecovered}
            popUpCasesPer1M={popUpCasesPer1M}
            popUpDeathsPer1M={popUpDeathsPer1M}
            popUpRecoveredPer1M={popUpRecoveredPer1M}
          />
        ) : (
          <Header />
        )}
      </View>
      <View style={styles.context}>
        <ScrollView horizontal={true} pagingEnabled={true}>
          <View style={styles.page1}>
            <View style={styles.contextInner}>
              <ScrollView
                style={styles.innerScroll}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.contextTitle}>MOST CASES</Text>
                <View style={styles.contextWrapper}>{output1}</View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.page2}>
            <View style={styles.contextInner}>
              <ScrollView
                style={styles.innerScroll}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.contextTitle}>MOST DEATHS</Text>
                <View style={styles.contextWrapper}>{output2}</View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.page3}>
            <View style={styles.contextInner}>
              <ScrollView
                style={styles.innerScroll}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.contextTitle}>MOST RECOVERED</Text>
                <View style={styles.contextWrapper}>{output3}</View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    width: '100%',
    height: '25%',
  },
  context: {
    width: '100%',
    height: '75%',
  },
  page1: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  page2: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  page3: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  contextTitle: {
    marginTop: '1%',
    marginBottom: '1%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: '#4E514F',
    fontFamily: 'Roboto-Bold',
  },
  contextInner: {
    width: '95%',
    height: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 0.4,
    borderRadius: 8,
    borderColor: '#F4FCF9',
    backgroundColor: '#fff',
    paddingBottom: '2%',
    paddingTop: '2%',
  },
  innerScroll: {
    width: '100%',
    height: '100%',
  },
  contextWrapper: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
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
  header: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  headerScroll: {
    height: '100%',
    width: '100%',
  },
  headerWrapper: {
    width: '90%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0.2,
    color: '#3D3F3E',
    marginTop: '3%',
  },
  haderContext: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0.2,
    color: '#1D1E1D',
    marginTop: '2.5%',
    marginBottom: '2.5%',
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

export default Context;

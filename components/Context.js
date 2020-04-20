import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';

import Country from './Country';
import Stat from './Stat';
import Page from './Page';

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

  const [popUpFlagUri, setPopUpFlagUri] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/1200px-International_Flag_of_Planet_Earth.svg.png',
  );
  const [popUpPopulation, setPopUpPopulation] = useState(7778955876);
  const [popUpCases, setPopUpCases] = useState(2413938);
  const [popUpDeaths, setPopUpDeaths] = useState(166307);
  const [popUpRecovered, setPopUpRecovered] = useState(615722);
  const [popUpCasesPer1M, setPopUpCasesPer1M] = useState(
    (popUpCases / (popUpPopulation / 1000000).toFixed()).toFixed(),
  );
  const [popUpDeathsPer1M, setPopUpDeathsPer1M] = useState(
    (popUpDeaths / (popUpPopulation / 1000000).toFixed()).toFixed(),
  );
  const [popUpRecoveredPer1M, setPopUpRecoveredPer1M] = useState(
    (popUpRecovered / (popUpPopulation / 1000000).toFixed()).toFixed(),
  );

  for (let i = 0; i < db.length; i++) {
    output1[i] = (
      <Country
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
        key={'output1' + i}
      />
    );

    output2[db2.length - (i + 1)] = (
      <Country
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
        key={'output2' + i}
      />
    );

    output3[db3.length - (i + 1)] = (
      <Country
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
        key={'output3' + i}
      />
    );
  }


  /*

            <View style={styles.container}>
          <Stat
            popUpFlagUri={popUpFlagUri}
            popUpPopulation={popUpPopulation}
            popUpCases={popUpCases}
            popUpDeaths={popUpDeaths}
            popUpRecovered={popUpRecovered}
            popUpCasesPer1M={popUpCasesPer1M}
            popUpDeathsPer1M={popUpDeathsPer1M}
            popUpRecoveredPer1M={popUpRecoveredPer1M}
          />
        </View>
        <View style={styles.context}>
          <ScrollView horizontal={true} pagingEnabled={true}>
            <Page title="MOST CASES" output={output1} />
            <Page title="MOST DEATHS" output={output2} />
            <Page title="MOST RECOVERED" output={output3} />
          </ScrollView>
        </View>
      </View>

  */
  return (
    <View>
      {
        !isLoaded ? <Loading /> : <Stat />

        
      }
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
});

export default Context;

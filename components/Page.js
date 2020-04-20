import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

const Page = props => {
  return (
    <View style={styles.page3}>
      <View style={styles.contextInner}>
        <ScrollView
          style={styles.innerScroll}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.contextTitle}>{props.title}</Text>
          <View style={styles.contextWrapper}>{props.output}</View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Page;

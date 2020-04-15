import React from 'react';
import {View, StyleSheet} from 'react-native';
import Context from './Context';

const Content = () => {
  return (
    <View style={styles.container}>
      <Context />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default Content;

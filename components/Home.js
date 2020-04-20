import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>WELCOME BRO</Text>
      <Button title="Go" onPress={() => navigation.navigate('Page')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default Home;

import React, {useRef} from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

const Loading = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/virus.png')} />
      <Animated.View style={{opacity: fadeAnim}}>
        <Text style={styles.title1}>TRACKER</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title1: {
    marginTop: '15%',
    marginBottom: '15%',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0.2,
    color: '#3D3F3E',
  },
});

export default Loading;

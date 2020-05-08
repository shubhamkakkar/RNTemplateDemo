import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function UnderLayingLogo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://cdn.dribbble.com/users/2111748/screenshots/6018852/dribbble_0030.jpg'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
    marginTop: 50,
    borderRadius: 10,
  },
});

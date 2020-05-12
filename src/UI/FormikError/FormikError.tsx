import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default function FormikError({meta}) {
  return <>{meta.error && meta.touched && <Text style={styles.errroText}>{meta.error}</Text>}</>;
}

const styles = StyleSheet.create({
  errroText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTxt}>RN TO DO LIST Pritice</Text>
    </View>
  )
}

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({theme, ButtonName, onPress}) => {
  return (
    <View style={styles[theme].container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles[theme].title}>{ButtonName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button


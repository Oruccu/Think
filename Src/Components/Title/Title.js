import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Title.Style'

const Title = ({title, theme}) => {
  return (
    <View>
      <Text style={styles[theme].title}>{title}</Text>
    </View>
  )
}

export default Title


import { TextInput, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/AntDesign'
import styles from './Input.style'

const Input = ({ placeholder, onChange, value, isSecure, theme, icon }) => {
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].icon} >
        <Icon
          name={icon}
          size={20}
          color={'#d2d2d0'}
          />
      </View>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        autoCapitalize='none'
        secureTextEntry={isSecure}
        multiline />
    </View>
  )
}

export default Input


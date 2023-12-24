import { Text, View } from 'react-native'
import React from 'react'
import styles from './Messages.Styles'
import { formatDistance, parseISO, } from 'date-fns'
import { tr } from 'date-fns/locale'
import { AntDesign } from '@expo/vector-icons'

const Messages = ({ messages,handleLike }) => {
  const formatedDate = formatDistance(parseISO(messages.date),new Date(), {
    addSuffix: true,
    locale:tr
  });

  const dataUser = messages.user
  const formatedUser = dataUser.charAt(0).toUpperCase() + dataUser.slice(1);

  return (

    <View style={styles.container}>
      <View stye={styles.innerContainer}>
        <Text style={styles.user}>{formatedUser}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{messages.text}</Text>
      </View>
      <View style={styles.innerContainer}>
        <AntDesign
          name='like2'
          size={25}
          color={'white'}
          onPress={handleLike} />
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{formatedDate}</Text>
        </View>
      </View>
    </View>

  )
}

export default Messages


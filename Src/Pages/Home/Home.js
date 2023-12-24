import { FlatList, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Home.Style'

import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Messages from '../../Components/Messages'
import ParseData from '../../Utils/ParseData'
import { db, auth } from '../../../firebaseConfig'
import { ref, set, onValue, push, update } from 'firebase/database'

const Home = () => {
  const [text, setText] = useState('')
  const [messageList, setMessageList] = useState([])
  const userMail = auth.currentUser.email

  function sendText() {
    const User = {
      text: text,
      user: userMail.split('@')[0],
      dislike:0,
      date: new Date().toISOString(),
    }
    push(ref(db, 'Users/'), { User });
    setText('');
  }

  useEffect(() => {
    const refdata = ref(db, 'Users/');
    onValue(refdata, (snapshot) => {
      const data = snapshot.val();
      const parsedData = ParseData(data)
      setMessageList(parsedData)
    })
  }, [])

  const handleText = (text) => {
    setText(text);
  }

  function handleOnLike(item) {
    console.log(item.dislike)
    
  }

  const renderData = ({ item }) =>
    <Messages 
    messages={item.User} handleLike={()=>handleOnLike(item.User)}
    />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <FlatList
          data={messageList}
          renderItem={renderData} />
        <Input
          placeholder={'Paylaşım oluştur'}
          theme={'Primary'}
          onChange={handleText} />
        <Button
          ButtonName={'Paylaş'}
          theme={'Primary'}
          onPress={sendText} />
      </View>
    </SafeAreaView>
  )
}

export default Home


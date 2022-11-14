import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, FlatList, KeyboardAvoidingView, Platform, PlatformColor, ActivityIndicator } from 'react-native'
import bg from '../../assets/images/BG.png'
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox'
import { useNavigation, useRoute } from '@react-navigation/native'
import { API, Auth, graphqlOperation } from "aws-amplify"
import { getChatRoom } from "../graphql/queries";

const ChatScreen = () => {
  const [chatRoom, setChatRoom] = useState(null)

  const route = useRoute()
  const navigation = useNavigation()

  const chatroomID = route.params.id

  useEffect(() => {
    API.graphql(graphqlOperation(getChatRoom, { id: chatroomID })).then(
      (result) => setChatRoom(result.data?.getChatRoom)
    )
  }, [])

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [route.params.name])
  
  if  (!chatRoom) {
    return <ActivityIndicator />
  }

  console.log(chatRoom.Messages.items)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "null"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList 
          data={chatRoom.Messages.items} 
          renderItem={({ item }) => <Message message={item}/>}
          style={styles.list}
          inverted
        />
        <InputBox chatroom={chatRoom}/>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
})

export default ChatScreen
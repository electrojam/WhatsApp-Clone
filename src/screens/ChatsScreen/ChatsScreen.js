import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import ChatListItem from '../../components/ChatListItem'
import { API, Auth, graphqlOperation } from "aws-amplify"
import { listChatRooms } from './queries'

const ChatsScreen = () => {
  const [chatRooms, setChatRooms] = useState([])

  useEffect(() => {
    const fetchChatRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser()

      const response = await API.graphql(
        graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
      )

      setChatRooms(response.data.getUser.ChatRooms.items)
    }

    fetchChatRooms()
  }, [])
  

  return (
    <FlatList 
      data={chatRooms}
      renderItem={({ item }) => <ChatListItem chat={item.chatRoom}/>}
      style={{ backgroundColor: 'white' }}
    />
  )
}

export default ChatsScreen
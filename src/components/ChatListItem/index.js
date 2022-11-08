import React, { useEffect, useState } from 'react'
import { Pressable, View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Auth } from 'aws-amplify'

dayjs.extend(relativeTime)

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser()

      // Loop through chat.users.items and find a user that is not us (Authenticated user)
      const userItem = chat.users.items.find(
        (item) => item.user.id !== authUser.attributes.sub
      )
      setUser(userItem?.user)
    }

    fetchUser()
  }, [])
  

  // Loop through chat.users.items and find a user that is not us (Authenticated user)

  return (
    <Pressable onPress={() => navigation.navigate('Chat', { id: chat.id, name: user?.name })} style={styles.container}>
      <Image source={{ uri: user?.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {user?.name}
          </Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage?.createdAt).fromNow(true)}</Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.lastMessage?.text} 
        </Text>
      </View>
    </Pressable>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  row:{
    flexDirection: "row",
    marginBottom: 5,
  },
  subTitle: {
    color: "gray",
  },
})
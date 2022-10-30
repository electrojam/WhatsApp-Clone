import React from 'react'
import { Pressable, Text, Image, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const ContactListItem = ({ user }) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  )
}

export default ContactListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  subTitle: {
    color: 'gray',
  },
})
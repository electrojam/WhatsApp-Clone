import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('')

  const onSend = () => {
    console.warn("Enviando un nuevo mensaje", newMessage)

    setNewMessage('')
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {/* Icon */}
      <AntDesign name="plus" size={20} color="royalblue" />
      {/* Text Input */}
      <TextInput 
        value={newMessage} 
        onChangeText={setNewMessage}
        style={styles.input} 
        placeholder="Escriba su mensaje..."
      />
      {/* Icon */}
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
    </SafeAreaView>
  )
}

export default InputBox

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: "lightgray",    
    borderWidth: StyleSheet.hairlineWidth,

  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
})
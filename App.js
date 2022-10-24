import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import ChatsScreen from './src/screens/ChatsScreen';

const chat = {
  id: "1",
  user: {
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    text: "¿Entonces que más?",
    createdAt: "07:15",
  },
}

export default function App() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});

import React, { useState } from 'react';
import { Alert, Button, Image, Text, TextInput, View, ToastAndroid,} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const checkPalindrome = () => {
    const processedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
      
      ToastAndroid.show('This is a Palindrome!', ToastAndroid.SHORT);
      Alert.alert('Palindrome!', 'This is a palindrome.', [{ text: 'OK' }]);
    } else {
      ToastAndroid.show('This is Not a Palindrome.', ToastAndroid.SHORT);
      Alert.alert('Not a Palindrome!', 'This is not a palindrome.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CEK TEXT PALINDROME</Text>
      <Image
        source={{
          uri: 'https://feb.umri.ac.id/wp-content/uploads/2016/01/bg.jpg'
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Palindrome Validate</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Masukin Teks"
        value={text}
        onChangeText={setText}
      />
      <Button title="Validate" onPress={checkPalindrome} />
    </View>
  );
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name === '') {
      setSubmitted(false);
    } else {
      setSubmitted(!submitted);
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>

      <TextInput
        onChangeText={value => setName(value)}
        style={styles.input}
        placeholder="e.g John"
        // multiline
        // keyboardType="numeric"udh
        // maxLength={3}
        // editable={false}
        // secureTextEntry
      />

      <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        disabled={submitted}
      />

      {submitted ? <Text>You are registered as {name}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 20,

    margin: 10,
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#555',
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default App;

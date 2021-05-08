import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from "./component/Square.js"
import Tester from "./component/tester.js"
import ListClient from "./component/listClient.js"
import TextInput_ from "./component/textInput.js"
import HttpExample from "./compteur/json"

export default function App() {
  return (
    <View style={styles.container}>
       <HttpExample  />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    
  },
});

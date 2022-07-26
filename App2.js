import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'



const App = () => {

  const [name, SetName] = useState('')
  const [submitted, SetSubmitted] = useState(false)
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted)
    } else {
      Alert.alert('Warning','vvvfv', [{text: 'OK'}])
    }
  }

  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <Text style={styles.text}>
        Entrer votre nom :
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      {/* <Button 
        title={submitted ? 'Clear' : 'Envoyer'}
        onPress={onPressHandler}
        color='green'
      /> */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Envoyer'}
        </Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
        underlayColor="#dddddd"
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Envoyer'}
        </Text>
      </TouchableHighlight> */}
      {/* <TouchableWithoutFeedback
        onPress={onPressHandler}>
        <View style={styles.button}> 
          <Text style={styles.text}>
            {submitted ? 'Clear' : 'Envoyer'}
          </Text>
        </View>
      </TouchableWithoutFeedback> */}
      <Pressable
        onPress={onPressHandler}
        hitSlop={ { top: 10, bottom: 10, left: 10, right: 10 } }
        android_ripple={ { color: '#00f' } }
        style={ ({pressed}) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      > 
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Envoyer'}
        </Text>
      </Pressable>
      { submitted ?
        <Text style={styles.text}>
          Bienvenue {name}
        </Text>
        : null
      }
      
    </View>
     
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bcece6', 
  },
  status: {
    backgroundColor: 'grey'
  },
  text: {
    color: '#000000',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 25,
    width: 220,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center'
  }

})
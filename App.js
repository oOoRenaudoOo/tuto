import { StyleSheet, Text, View, TextInput, Button,  Pressable, Modal } from 'react-native'
import React, { useState } from 'react'


const App = () => {

  const [name, SetName] = useState('')
  const [submitted, SetSubmitted] = useState(false)
  const [showWarning, SetShowWarning] = useState(false)

  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted)
    } else {
      SetShowWarning(true)
    }
  }

  return (
    <View style={styles.body}>
      
      <Modal
        visible={showWarning}
        onRequestClose={() =>
          SetShowWarning(false)
        }
        transparent
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.modal_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.warning_text}>Le nom doit avoir au moins 3 caracteres</Text>
            </View>
            <Pressable
              onPress={ () => SetShowWarning(false) }
              style={styles.warning_button}
              android_ripple={ { color: '#fff' } }
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>  
      </Modal>

      <Text style={styles.text}>
        Entrer votre nom :
      </Text>

      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />

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
    alignItems: 'center'
  },

  text: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
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
    justifyContent: 'center'
  },
  
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20
  },
  
  modal_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00000099"
  },

  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },

  warning_text: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center'
  },

  warning_body: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  warning_button: {
    height: 45,
    justifyContent:'center',
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }

})
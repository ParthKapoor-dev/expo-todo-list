import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View , Pressable } from 'react-native';
// import Button from './components/Button';
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react';

const PlaceholderImage = require('./assets/placeholder.png');


export default function App() {

  const [selectedImage, setSelectedImage] = useState(PlaceholderImage);

  async function handleChangeImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing : true
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    }
    else {
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Parth Kapoor</Text>
      <Image source={selectedImage} style={styles.image} />
      <Pressable onPress={handleChangeImage} style={styles.pressableButton} >
        <Text style={styles.text}>
          Change Image
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom : 30
  },
  image: {
    height: 320,
    width: 300,
    borderRadius : 20
  },
    pressableButton: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius : 20
  },
});

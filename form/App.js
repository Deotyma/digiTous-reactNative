import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

const App = () => {

const [login, setLogin] = useState('Your login');
const [password, setPassword] = useState('');
const onSubmit = () =>{
  if(password.length< 6){
    Alert.alert('Your passwort is too short');
    alert('Your passwort is too short');
  } else {
    Alert.alert('Form submited');
    alert('Form submited');
  }

}


  return (
    <View style={styles.container}>
    <Text style={styles.text}>Login</Text>
    <TextInput style={styles.inputText} onChangeText={setLogin}
      value={login}/>
      <Text style={styles.text}>Password</Text>
    <TextInput style={styles.inputText} onChangeText={setPassword}
      value={password} secureTextEntry={true}/>
      <Pressable onPress={onSubmit}>
      <Text style={styles.button}> Submit </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddffdd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#ddffaa',
    padding: 16,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputText: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 8,
    paddingHorizontal: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
export default App;
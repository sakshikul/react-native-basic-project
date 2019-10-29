import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView, ScrollView, TouchableOpacity  } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';


export default function ToDo() {
  const goToHome = () => {
        Actions.home()
     }
  const [enteredText, setEnteredText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const  changedTextHandler = (enteredText) => {
    setEnteredText(enteredText);
    console.log(setEnteredText(enteredText))
  }

  const addValue = () =>{
    setCourseGoals(currentGoals => [...currentGoals, enteredText]);
  }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  return (
    <View>
    <View style = {styles.screen}>
    <Text>To Do list in React Native Form</Text>
    <View style = {styles.inputContainer}>
      <TextInput 
        placeholder = "About Some Courses"
        style= {styles.input} 
        onChangeText = {changedTextHandler} 
        value = {enteredText}
      />
      <Button title = "ADD" onPress={addValue} />
    </View>
    <ScrollView >
     {courseGoals.map((goals)=><View key = {goals} style = {styles.listItem}><Text>{goals}</Text></View>)}
    </ScrollView>
    </View>
    <TouchableOpacity>
      <Text>Submit List</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 60,
    backgroundColor: '#dacece',
    height: 771,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
  },
  input: {
    borderColor: 'black' ,
    borderWidth: 1,
    padding : 10, 
    width: 270
  },
  listItem:{
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 10,
  }
 
});
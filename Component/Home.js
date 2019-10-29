import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView, ScrollView, Dimensions, TouchableOpacity  } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './AssetExample';
import ImageCarousel from './ImageCarousel'; 
const { width } = Dimensions.get('window'); 
//import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component{
   
    render(){
        const goToAbout = () => {
            Actions.todo()
         }
        return(
            <View style={styles.container}>
                   
                    <ScrollView>
                        <View>
                            <Text style= {styles.headerText}>React Native Content</Text>
                        </View>
                <View style={styles.carouselContainer2}>
                    <ImageCarousel/>
                </View>
                <View>
                    <AssetExample />
                </View>
                
                </ScrollView>
                <TouchableOpacity style = {styles.headerText} onPress = {goToAbout}>
                    <Text>Next Page</Text>
                </TouchableOpacity>
                </View>
            
               
            
        )
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    }, 
      carouselContainer: {
      height: 150,
      width: width,
      borderWidth: 5,
      borderColor: 'white',
      marginTop:10
    },
    carouselContainer2: { 
      width: width,
      height:width*0.8, 
      marginTop:10
    },
    headerText: {
      textAlign: 'center',
      backgroundColor: 'grey',
      padding: 20,
      marginTop: 0,
      fontSize: 18,
      color: 'white',
      
  
  
    } 
  });

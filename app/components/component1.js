
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  ScrollView,
  Button,
  Navigator,
} from 'react-native';

class Component1 extends Component {
  render() {
    return (
        <Button value="login" />
    )
  }
}

renderScene() {

}
class ImageInsta extends Component {
  render(){
    return(
         <Image 
         source={require('./app/images/instagram-logo.png')} 
         style={styles.logoInsta} 
         resizeMode='cover' 
         />
      
      )
  }
}

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.green}>
              <ScrollView >
                <Text style={styles.textColor}> 
                  <Text style={styles.judul}> ini adalah Judul </Text>
                
                  for development android application ini adalah header for development android application ini adalah header for development android application ini adalah header for development android application ini adalah header for development android application ini adalah header for development android application ini adalah header for devel android application ini adalah header for development android application  </Text> 
              </ScrollView>
            </View>
            
            <View style={styles.red} >
              <ImageInsta/>
              <TextInput style={styles.textInput} placeholder="masukkan username "/>
               <TextInput style={styles.textInput} placeholder="masukkan password"/>

              <ComponentApp/>
            </View>
            <View style={styles.black} >
              <View style={styles.blackOne}>
                <ImageInsta/>
                <Text style={styles.textColorInvert}> child black one </Text> 
              </View>
              <View style={styles.blackTwo}>
                <ImageInsta/>
                <Text style={styles.textColorInvert}> child black one </Text> 
              </View>
              
            </View>
         </ScrollView>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  // bagian green 
  judul : {
    fontSize:30,
    fontWeight:'bold'
  },
  green: {
    backgroundColor:'lime',
    height:300,
    padding:10,
    elevation:100

  
  },
  logoInsta: {
    width :300,
    height:300
  },
  // akhir dari bagian green 
  // bagian red
  red: {
    padding:10,
    backgroundColor:'skyblue',
    height:500,
    alignItems:'center'
  
  },
  textInput : {
    backgroundColor:'#fff',
    color:'#2d2d2d',
    padding:5,
    marginTop:5,
    alignSelf:'stretch',
    opacity:0.5,
  },
  // akhir dari bagian red 
  black: {
    padding:10,
    backgroundColor:'black',
    flexDirection:'row',
    flex:1,
    height:300,
    padding:10
    
  },
  blackOne: {
    backgroundColor:'#fff',
    flex:1,
    marginRight:10
  },blackTwo: {
    backgroundColor:'#fff',
    flex:1
  },
  textColor : {
    color:'white',
    fontFamily:'times new roman',
  },
  textColorInvert : {
    color:'black'
  },



})
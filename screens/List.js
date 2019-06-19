// Second screen which we will use to get the data
import React, { Component } from 'react';
//import react in our code.
import { Platform, Button, ScrollView, StyleSheet, TouchableOpacity, Text, View, ImageBackground, Image, AppRegistry, AsyncStorage } from 'react-native';
import { Provider as PaperProvider, Card } from 'react-native-paper';
import {getAssetByFilename} from './Asset'


export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
 
      massage:''
  }


   
}









  onPress = () => {
   // alert(this.props.navigation.state.params.temp1);
    this.props.navigation.state.params.temp1 = '0' ;
    this.props.navigation.navigate('Home');
    
}
  
  render() {

    return (
      <View style={styles.MainContainer} >
          <View style={{ backgroundColor: '#3C3D5C', }}>
                    <Card style={{ height: 70, elevation: 5, backgroundColor: '#121133' }}>
                        <Card.Content>
                            <View style={{
                                flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                                backgroundColor: '#3C3D5C'
                            }}>
                               
                                <View style={{ marginTop: 5, marginRight: 90 }}>
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>
                                       Result
                     </Text>
                                </View>
                                <View style={{ marginBottom: 25 }}>
                                    <Image style={{ width: 45, height: 47, marginBottom: 10 }}
                                       source={getAssetByFilename('logo')}></Image>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </View>

                <ImageBackground style={{ width: 300, height: 150,alignSelf:'center',marginTop:'10%' }}  source={getAssetByFilename('test')}>
                <Text style={{textAlign:'center',fontSize:20,color:'#000000',marginTop:5}}>Thank you for taking test </Text>
                <Text style={{justifyContent:'center',textAlign:'center',marginTop:60,fontSize:22}}>{this.props.navigation.state.params.temp1}/10</Text>
                </ImageBackground>
         <Text style={{textAlign:'center',marginTop:50,marginLeft:30,marginRight:30,color:'#ffffff',fontSize:20}}>{this.props.navigation.state.params.massage}</Text>

         <View style={{width: '50%',height:36,marginTop:20,alignSelf:'center',backgroundColor:'#ff0000'}}> 
              <Button  title='Back To Home' color='#ffffff' backgroundColor='#F39C12'  onPress={() => this.onPress()}>
            
              </Button>
              </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      backgroundColor: '#3C3D5C'
      
    },
   
    TextStyle:{
      fontSize : 25,
       textAlign: 'center'
    }
   
   });
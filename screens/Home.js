
import React, {Component} from 'react';
import {Platform,Button, ScrollView,StyleSheet, TouchableOpacity,BackHandler , View,ImageBackground,Image} from 'react-native';
import {getAssetByFilename} from './Asset'


export default class Home extends Component {

    constructor(props) {
        super(props)
        //Binding handleBackButtonClick function with this
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      }
      componentWillMount() {
        // This is the first method in the activity lifecycle
        // Addding Event Listener for the BackPress 
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      }
      componentWillUnmount() {
        // This is the Last method in the activity lifecycle
        // Removing Event Listener for the BackPress 
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
      }
      handleBackButtonClick() {
        // Registered function to handle the Back Press
        // We are generating an alert to show the back button pressed
        //alert('You clicked back. Now Screen will move to ThirdPage');
        // We can move to any screen. If we want
        BackHandler.exitApp();
        //this.props.navigation.navigate('ThirdPage');
        // Returning true means we have handled the backpress
        // Returning false means we haven't handled the backpress
        return true;
      }

  render() {
    return (
        <View style = {styles.container}>
        

<ImageBackground  source={getAssetByFilename('bg')} style={{width: '100%', height: '100%'}}>
              <View style={styles.welcome}>
                    <Image  source={getAssetByFilename('main_logo')} style={{width: 250,height: 120,marginBottom:80}}></Image>

               <View style={{width: '40%',alignItems:'center',backgroundColor:'#ff0000'}}> 
                    <Button  title='Start' backgroundColor='#ffffff' color='#ffffff'  onPress={() => this.props.navigation.navigate('Catogary')}>
                  
                    </Button>
                    

                    </View>

              </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    welcome: {

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 50,
    },


});

import React, {Component} from 'react';
import {getAssetByFilename} from './Asset'
import {Platform, StyleSheet, Text, View,Image,ImageBackground} from 'react-native';

export default class Splash extends Component {

    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 3000);
    }

    componentWillUnmount() {
      setTimeout(() => {
          this.props.navigation.navigate('Home')
      }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
            <ImageBackground 
                    source={getAssetByFilename('splash_bg')}
                    style={{width: '100%', height: '100%'}}>
              <View style={styles.welcome}>
                    <Image 
                      source={getAssetByFilename('main_logo')}
                      style={{width: 260,height: 125}}></Image>
              </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React from 'react';
import { BackHandler, Button, ScrollView, StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground, TouchableHighlight, } from 'react-native';
import { Provider as PaperProvider, Card, Checkbox } from 'react-native-paper';
import {getAssetByFilename} from './Asset'

 var sele=0;

export default class Catogory extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        this.state = {
            status: false
        }
        this.state={
      optionselected:false
        }

      
        //Binding handleBackButtonClick function with this
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    state = {
        toggle: true,
        toggle1: true,
        toggle2: true,
        toggle3: true,

    };


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
       
        this.props.navigation.navigate('Home');
        // Returning true means we have handled the backpress
        // Returning false means we haven't handled the backpress
        return true;
      }



    onPress = () => {
        const newState = !this.state.toggle;
       // alert(newState)
        this.setState({ toggle: newState });
        this.setState({ toggle1: false });
        this.setState({ toggle2: false });
        this.setState({ toggle3: false });
      this.state.optionselected= getAssetByFilename('1_img')
        
    }

    onPress0 = () => {

      if( this.state.optionselected==getAssetByFilename('1_img')){
        this.props.navigation.navigate('Screen_12_36_Month');
      }
      else if(this.state.optionselected==getAssetByFilename('2_img')){
        this.props.navigation.navigate('Screen_4_12_years');
      }
      else if(this.state.optionselected==getAssetByFilename('3_img')){
        this.props.navigation.navigate('Screen_12_18_years');
      }
      else if(this.state.optionselected==getAssetByFilename('4_img')){
        this.props.navigation.navigate('Screen_18_plus_year');
      }
      else if(this.state.optionselected==''){
        alert('please select an option');
      }

      }

       

    

    onPress1 = () => {
        const newState1 = !this.state.toggle1;

        this.setState({ toggle: false });
        this.setState({ toggle2: false });
        this.setState({ toggle3: false });
        this.setState({ toggle1: newState1 })

        this.state.optionselected=getAssetByFilename('2_img')
    }
    onPress2 = () => {
        const newState2 = !this.state.toggle2;
        this.setState({ toggle: false });
        this.setState({ toggle1: false });
        this.setState({ toggle3: false });
        this.setState({ toggle2: newState2 })
        this.state.optionselected=getAssetByFilename('3_img')
    }

    onPress3 = () => {
        const newState3 = !this.state.toggle3;
        this.setState({ toggle: false });
        this.setState({ toggle1: false });
        this.setState({ toggle2: false });
        this.setState({ toggle3: newState3 })
        this.state.optionselected=getAssetByFilename('4_img')
    }

    render() {
        const { toggle } = this.state;
        const { toggle1 } = this.state;
        const { toggle2 } = this.state;
        const { toggle3 } = this.state;
        const textValue1 = toggle ? "Checked":"";
        const buttonBg1 = toggle ? "#52BE80" : "#ff000000";
        const txtColor1 = toggle ? "#ffffff" : "#000000"
        const textValue2 = toggle1 ? "Checked" : "";
        const buttonBg2 = toggle1 ? "#52BE80" : "#ff000000";
        const txtColor2 = toggle1 ? "#ffffff" : "#000000"
        const textValue3 = toggle2 ? "Checked" : "";
        const buttonBg3= toggle2 ? "#52BE80" : "#ff000000";
        const txtColor3 = toggle2 ? "#ffffff" : "#000000"
        const textValue4 = toggle3 ? "Checked" : "";
        const buttonBg4 = toggle3 ? "#52BE80" : "#ff000000";
        const txtColor4 = toggle3 ? "#ffffff" : "#000000"

        return (


            <View style={{ backgroundColor: '#3C3D5C',flex:1}}>
                <View style={{ backgroundColor: '#3C3D5C', }}>
                    <Card style={{ height: 70, elevation: 5, backgroundColor: '#121133' }}>
                        <Card.Content>
                            <View style={{
                                flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                                backgroundColor: '#3C3D5C'
                            }}>
                               
                                <View style={{ marginTop: 5, marginRight: 90 }}>
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>
                                        Autism Tracker
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
             
                <View style={{ marginLeft: 40, marginTop: 20 }}>
                    <Text style={{ color: '#ffffff', fontSize: 25 }}>Choose age Catogary</Text>
                </View>


                <View style={{
                    flexDirection: 'row', justifyContent: 'center',
                    alignContent: 'center', marginTop:'5%'
                }}>

                    <TouchableOpacity onPress={() => this.onPress()}>
                        <ImageBackground style={{ width: 130, height: 160, marginRight:10 }}
                            source={getAssetByFilename('1_img')} >
                            <View style={{ flexDirection: 'row'}}>
                                <TouchableOpacity style={{
                                    margin: 40, flex: 1, height: 35, backgroundColor: buttonBg1,
                                    justifyContent: 'center'
                                }} onPress={() => this.onPress()}>

                                    <Text style={{ color: txtColor1, textAlign: 'center', fontSize: 12 }}>{textValue1}</Text>

                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.onPress1()}>
                        <ImageBackground style={{  width: 130, height: 160,marginLeft:10}}
                             source={getAssetByFilename('2_img')}>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{
                                    margin: 40, flex: 1, height: 35, backgroundColor: buttonBg2,
                                    justifyContent: 'center'
                                }} onPress={() => this.onPress1()}>

                                    <Text style={{ color: txtColor2, textAlign: 'center', fontSize: 12 }}>{textValue2}</Text>

                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'center',marginTop:'5%', alignContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => this.onPress2()}>
                        <ImageBackground style={{  width: 130, height: 160, marginLeft: 10, marginRight: 10,  marginTop: 10 }}
                             source={getAssetByFilename('3_img')} >
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{
                                   margin: 40, flex: 1, height: 35, backgroundColor: buttonBg3,
                                    justifyContent: 'center'
                                }} onPress={() => this.onPress2()}>

                                    <Text style={{ color: txtColor3, textAlign: 'center', fontSize: 12 }}>{textValue3}</Text>

                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.onPress3()}>
                        <ImageBackground style={{  width: 130, height: 160, marginLeft: 10, marginRight: 10, marginTop: 10 }}
                           source={getAssetByFilename('4_img')} >

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{
                                    margin: 40, flex: 1, height: 35, backgroundColor: buttonBg4,
                                    justifyContent: 'center'
                                }} onPress={() => this.onPress3()}>

                                    <Text style={{ color: txtColor4, textAlign: 'center', fontSize: 12 }}>{textValue4}</Text>

                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
               
                <View style={{width:'40%',alignSelf:'center',backgroundColor:'#ff0000',height:36,marginTop:20}}> 
                    <Button  title='Next' color='#ffffff'  onPress={this.onPress0}/>
                </View>


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

    button: {
        display: 'flex',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.9,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20, width: 120, height: 170, marginLeft: 10
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

});
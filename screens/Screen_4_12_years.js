import React, { Component } from 'react';
import { BackHandler, Button, ScrollView, StyleSheet, TouchableOpacity, Text, View, ImageBackground, Image, AppRegistry} from 'react-native';
import { Provider as PaperProvider, Card } from 'react-native-paper';
import {getAssetByFilename} from './Asset'
import AsyncStorage from '@react-native-community/async-storage';



const ques=["Does your child speak very little and give unrelated answers to questions?",
"Does your child not respond to their name or avoid eye contact?",
"Does your child not engage in games of pretend with other children?",
"Does your child struggle to understand other people’s feelings?",
"Is your child easily upset by small changes?",
"Does your child have obsessive interests?",
"Is your child over or under-sensitive to smells, tastes, or touch?",
"Does your child struggle to socialize with other children?",
"Does your child avoid physical contact?",
"Does your child show little awareness of dangerous situations?"];


    const  img=[getAssetByFilename('2_img'),getAssetByFilename('2_img'),
    getAssetByFilename('2_img'),getAssetByFilename('2_img'),
    getAssetByFilename('2_img'),getAssetByFilename('2_img'),
    getAssetByFilename('2_img'),getAssetByFilename('2_img'),
    getAssetByFilename('2_img'),getAssetByFilename('2_img')];

    const option = [{
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    },
    {
      option1: 'Never',
      option2: 'Rarely',
      option3: 'Sometimes',
      option4: 'Often'
    
    }

];

const arr=["Your child may have symptoms of Autism. Please contact a specialist.",
"Your child have no traces of autism. Let him grow up as a normal child."];



var myArray = option.toString().split(',')


let randomHex = () => {
  
  let color = '#3498DB';
  
  return color;
}
let randomHex1 = () => {
  
  let color = '#2980B9';
  
  return color;
}
let randomHex2=()=>{
  let color = '#3498DB';
  
  return color;
}

let randomHex3=()=>{
  let color = '#3498DB';
  
  return color;
}
let randomHex4=()=>{
  let color = '#3498DB';
  
  return color;
}
global.optionSelected='';
var item3 = '';
var temp=0;
var positive_cnt=0
var negative_cnt = 0
var massage =''
var flag = 0;

export default class Screen_4_12_years extends Component {


    constructor() {
        super();
 //Binding handleBackButtonClick function with this
 this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
          pressed: false
      };
            this.state = {
                backgroundColor: randomHex()
            };
            this.state = {
              backgroundColor: randomHex1()
          };
          this.state = {
            backgroundColor: randomHex2()
        };
        this.state = {
          backgroundColor: randomHex3()
      };

      this.state = {
        backgroundColor: randomHex4()
    };
        this.state = {
            index: 0,
           
        };

       
    }

    onClick=async()=> {
      this.setState({backgroundColor: randomHex()}); 
    
      try {
        await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(item3.option1));
        temp= 0;
        flag = 1
       
    } catch (error) {
        // Error saving data
    }
  }
  onClick1=async()=> {
    this.setState({backgroundColor: randomHex()});
   
    try {
      await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(item3.option2));
      temp= 1
      flag = 1
 
  } catch (error) {
      // Error saving data
  }
    
}

onClick2=async()=> {
    this.setState({backgroundColor: randomHex()}); 
    try {
      await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(item3.option3));
      temp= 2
      flag = 1
      
  } catch (error) {
      // Error saving data
  }
    
}

onClick3=async()=> {
    this.setState({backgroundColor: randomHex()}); 
    try {
      await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(item3.option4));
      temp=3
      flag = 1
      
  } catch (error) {
      // Error saving data
  }
    
}
goToNext = () => {
    this.setState({backgroundColor:randomHex1()})

       if(flag == 0){
           alert('please select an option')
           flag = 0
       }else{

           flag = 0
           this.setState({ index: (this.state.index + 1) % ques.length });
           this.setState({ index: (this.state.index + 1) % img.length });
           this.setState({ index: (this.state.index + 1) % option.length });
           
           if(temp == 0){
               positive_cnt ++
           }else{
               negative_cnt ++
           }
           if((this.state.index + 1) == 10){
              // console.log(negative_cnt);
               let temp1 = negative_cnt ;
               negative_cnt = 0 ;
               if(temp1>5){
                   massage=arr[0];
               }
               else{
                   massage=arr[1]
               }
               this.props.navigation.navigate('List',{
                   temp1,massage
                })  
           }
       }
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
   
    this.props.navigation.navigate('Catogary');
    // Returning true means we have handled the backpress
    // Returning false means we haven't handled the backpress
    return true;
  }

    render() {
        const item1 = ques[this.state.index];
        const item2 = img[this.state.index];
        item3 = option[this.state.index];

        const { navigate } = this.props.navigation;

        return (

            <View style={{ backgroundColor: '#3C3D5C', flex: 1 }}>
            <View style={{ backgroundColor: '#3C3D5C', }}>
                    <Card style={{ height: 70, elevation: 5, backgroundColor: '#121133' }}>
                        <Card.Content>
                            <View style={{
                                flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                                backgroundColor: '#3C3D5C'
                            }}>
                               
                                <View style={{ marginTop: 5, marginRight: 90 }}>
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>
                                        4-12 Years
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
            <View >
                <Card style={{ height: 25, elevation: 5, backgroundColor: '#000000' }}>
                    <Card.Content>
                        <View style={{
                           flexDirection: 'row', justifyContent: 'center',
                            backgroundColor: '#3C3D5C'
                        }}>

                            <View style={{ marginTop: -13 }}>
                                <Text style={{ color: '#ffffff', fontSize: 14 }}>
                                4-12 Years
                 </Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <Text style={{
                color: '#ffffff', fontSize: 12,margin:30,padding:15, textAlign: 'center',
                borderRadius: 3,
                // Set border width.
                borderWidth: 1,
                // Set border Hex Color Code Here.
                borderColor: '#ffffff',
                // Setting Up Background Color of Text component.
                backgroundColor: '#3C3D5C',
                // Adding padding on Text component.
                padding: 2,
                fontSize:14
            }}>{item1}
            </Text>



            <Image style={{ width: 100, height: 100,  alignSelf:'center' }} source={item2}></Image>
            <TouchableOpacity onPress={this.onClick}>
               <View style={{backgroundColor:'#2980B9',marginTop:15,marginLeft:50,marginRight:50}}>
               
                
                <Text style={{
                    color: '#ffffff', fontSize: 12, textAlign: 'center',
                
                    // Setting Up Background Color of Text component.
                    backgroundColor: '#2980B9',
                    // Adding padding on Text component.
                    padding: 2,
                    fontSize:18
                }}>{item3.option1}
                </Text>
               
                
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onClick1}>
                <View style={{backgroundColor:'#2980B9',marginTop:10,marginLeft:50,marginRight:50}}>
                  
                    <Text style={{
                        color: '#ffffff', fontSize: 12, textAlign: 'center',                        
                        // Setting Up Background Color of Text component.
                        backgroundColor: '#2980B9',
                        // Adding padding on Text component.
                        padding: 2,
                        fontSize:18
                    }}>
                        {item3.option2}
                        </Text >
                  
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onClick2()}>
                <View style={{backgroundColor:'#2980B9',marginTop:10,marginLeft:50,marginRight:50}}>
                
                    <Text style={{
                        color: '#ffffff', fontSize: 12, textAlign: 'center',
                                                 
                        // Setting Up Background Color of Text component.
                        backgroundColor: '#2980B9',
                        // Adding padding on Text component.
                        padding: 2,
                        fontSize:18
                    }}>
                        {item3.option3}
                    </Text>
                   
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onClick3()} >
                <View style={{backgroundColor:'#2980B9',marginTop:10,marginLeft:50,marginRight:50}}>
                
                    <Text style={{
                      color: '#ffffff', fontSize: 12, textAlign: 'center',
              
                        // Setting Up Background Color of Text component.
                        backgroundColor: '#2980B9',
                        // Adding padding on Text component.
                        padding: 2,
                        fontSize:18
                    }}>
                        {item3.option4}
                    </Text>
                    
                </View>
                </TouchableOpacity>
                <View style={{width: '50%',height:36,marginTop:20,height:40,alignSelf:'center',backgroundColor:'#ff0000',}}> 
                <Button  title='Next' color='#ffffff' backgroundColor='#F39C12'  onPress={this.goToNext}>
              
                </Button>
                

                </View>

            <View style={{ width: '100%', marginRight: 50,marginTop:5,  alignItems: 'center' }}>
                {/* <Button title='FetchData' color='#19CFFF' onPress={() => this.props.navigation.navigate('List',{
                    option: item3.option1
                })}>
                </Button> */}
            </View>

        </View>

    );

    

}



}


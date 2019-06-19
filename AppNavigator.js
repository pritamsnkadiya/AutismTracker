import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Splash from './screens/Splash';
import Home from './screens/Home';
import List from './screens/List';
import Catogary from './screens/Catogary';
import Screen_12_36_Month from './screens/Screen_12_36_Month';
import Screen_4_12_years from './screens/Screen_4_12_years';
import Screen_12_18_years from './screens/Screen_12_18_years';
import Screen_18_plus_year from './screens/Screen_18_plus_year';

const AppNavigator = createStackNavigator({

    Splash:
        {
            screen: Splash,
            navigationOptions: {
                header: null,
            },
        },

    Home:
        {
            screen: Home,
            navigationOptions: {
                header: null,
            },
        },

    Catogary:
        {
            screen: Catogary,
            navigationOptions: {
                header: null,
            },
        },

        Screen_12_36_Month:
        {
            screen: Screen_12_36_Month,
            navigationOptions: {
                header: null,
            },
        },

        Screen_4_12_years:
        {
            screen:  Screen_4_12_years,
            navigationOptions: {
                header: null,
            },
        },
        Screen_12_18_years:
        {
            screen:  Screen_12_18_years,
            navigationOptions: {
                header: null,
            },
        },

        Screen_18_plus_year:
        {
            screen:  Screen_18_plus_year,
            navigationOptions: {
                header: null,
            },
        },

        List:
        {
            screen:  List,
            navigationOptions: {
                header: null,
            },
        },

       
    
});
export default createAppContainer(AppNavigator);
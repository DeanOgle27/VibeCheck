import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC';
import ScreenD from '../screens/ScreenD';

const OuterNavigator = createStackNavigator(
    {
        ScreenA: {
            screen: ScreenA,
            navigationOptions: {
                //Set header stuff here
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: '#4444aa',
                },
                headerTitle: "Screen A"
            }
        },
        ScreenB: {
            screen: ScreenB,
            navigationOptions: {
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: '#44aa44',
                },
                headerTitle: "Screen B"
            }
        },
        ScreenC: {
            screen: ScreenC,

            navigationOptions: {
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: '#aa4444',
                },
                headerTitle: "Screen C"
            }
        },
        ScreenD: {
            screen: ScreenD,

            navigationOptions: {
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: '#44aaaa',
                },
                headerTitle: "Screen D"
            }
        },
    },

    {
        // Sets initial screen to screen A
        initialRouteName: 'ScreenA',

        // Can be changed to whatever you prefer
        headerMode: 'float',
    }
);


export default createAppContainer(OuterNavigator);
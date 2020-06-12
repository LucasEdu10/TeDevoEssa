import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home';
// import Datail from './pages/Datail';
import Login from './pages/Login';
import Datail from './pages/Datail';


const AppStack = createStackNavigator();


const Routes = () => {

    return(
        <NavigationContainer>
        <AppStack.Navigator headerMode="none" screenOptions={{
            cardStyle:{
                backgroundColor: '#007fff'
            }
        }}>
            <AppStack.Screen name="Home" component={Home}/>
            <AppStack.Screen name="Login" component={Login}/>
            <AppStack.Screen name="Datail" component={Datail}/>
        </AppStack.Navigator>
    </NavigationContainer>
    );

};

export default Routes;
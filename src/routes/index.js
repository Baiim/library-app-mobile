import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  WelcomeScreen,
  SignIn,
  SignUp,
  SignUpAddress,
  SuccessSignUp,
  HomePage,
  BookPage,
  BookmarkPage,
  ProfilePage,
  BookDetail,
  OrderDetail,
  SuccessOrder,
} from '../pages';
import {BottomNavigatorComponent} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigatorComponent {...props} />}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BookPage"
        component={BookPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BookmarkPage"
        component={BookmarkPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessOrder"
        component={SuccessOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BookDetail"
        component={BookDetail}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

import {View, Button} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  LogIn,
  SignUp,
  Fetch,
  ReactContext,
  ReactSagaScreen,
} from '@screens';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Navigation = props => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const naviButton = (optionName, pageName, pageTitle) => {
    return {
      [optionName]: () => (
        <Button
          title={pageName}
          onPress={() => {
            navigation.navigate(pageTitle ? pageTitle : pageName);
          }}
        />
      ),
    };
  };

  useEffect(() => {
    function authStatechanged(user) {
      setUser(user);
    }
    const subscriber = auth().onAuthStateChanged(authStatechanged);
    return subscriber;
  }, [user]);

  return user ? (
    <Authorized Stack={Stack} naviButton={naviButton} />
  ) : (
    <UnAuthorized Stack={Stack} naviButton={naviButton} />
  );
};

export default Navigation;

const Authorized = ({Stack, naviButton}) => (
  <Stack.Navigator>
    <Stack.Screen name="Home">{() => <HomeScreen />}</Stack.Screen>
    <Stack.Screen name="Fetch">{() => <Fetch />}</Stack.Screen>
  </Stack.Navigator>
);

const UnAuthorized = ({Stack, naviButton}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="React Saga Screen"
      options={naviButton('headerRight', 'Log In')}>
      {() => <ReactSagaScreen />}
    </Stack.Screen>

    <Stack.Screen name="Log In" options={naviButton('headerRight', 'Sign Up')}>
      {() => <LogIn />}
    </Stack.Screen>

    <Stack.Screen name="Sign Up" component={SignUp} />

    <Stack.Screen name="ReactContext" component={ReactContext} />
  </Stack.Navigator>
);

import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {firebaseLogOut} from 'src/helpers/FirebaseHelper';
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Log Out"
        onPress={() => {
          firebaseLogOut();
        }}
      />
      <Button
        title="Fetch"
        onPress={() => {
          navigation.navigate('Fetch');
        }}
      />
    </View>
  );
};

export default HomeScreen;

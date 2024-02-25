import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import globalStyle from 'src/styles/GlobalStyles';
import {firebaseSignUp} from 'src/helpers/FirebaseHelper';

const SignUp = () => {
  const navigation = useNavigation();
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View flex={1}>
      <View flex={6}>
        <TextInput
          style={globalStyle().TextInputComponent}
          onChangeText={setEmail}
          value={email}
          placeholder={'Enter Email'}
          autoCapitalize={'none'}
        />
        <TextInput
          style={globalStyle().TextInputComponent}
          value={pwd}
          onChangeText={setPwd}
          placeholder={'Enter Pwd'}
          autoCapitalize={'none'}
          onSubmitEditing={() => {
            onSignUpPressed(email, pwd);
          }}
        />
        <TouchableOpacity
          style={globalStyle('skyblue').button}
          onPress={() => {
            firebaseSignUp(email, pwd);
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View flex={1}>
        <Button
          title="Have an account? Log In"
          onPress={() => {
            navigation.navigate('Log In');
          }}
        />
      </View>
    </View>
  );
};

export default SignUp;

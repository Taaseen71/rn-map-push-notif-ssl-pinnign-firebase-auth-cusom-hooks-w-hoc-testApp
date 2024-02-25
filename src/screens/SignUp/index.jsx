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
import {useDispatch} from 'react-redux';
import {request} from 'src/features/user/userSlice';
import {kApiSignup} from 'src/config/WebService';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const navigation = useNavigation();
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onSignUpPressed = async (name, pwd) => {
    try {
      await auth()
        .createUserWithEmailAndPassword(name, pwd)
        .then(resp => {
          console.log(resp.user);
          alert('User account created & signed in!');
        });
    } catch (error) {
      alert(error.code);
      console.error(error);
    }
  };

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
        />
        <TouchableOpacity
          style={globalStyle('skyblue').button}
          onPress={() => {
            // if (!!email & !!pwd) {
            //   dispatch(
            //     request({
            //       url: kApiSignup,
            //       // data: {name: name, email: email, password: pwd},
            //       data: {email: email, password: pwd},
            //     }),
            //   );
            // } else {
            //   return Alert.alert(
            //     'Missing Information',
            //     'Fill up at least the email and password',
            //   );
            // }
            onSignUpPressed(email, pwd);
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
        {/* <Button
          title="(useContext example page)"
          onPress={() => {
            navigation.navigate('ReactContext');
          }}
        /> */}
      </View>
    </View>
  );
};

export default SignUp;

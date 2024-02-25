import { View, Text, Button, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import globalStyle from 'src/styles/GlobalStyles'
import { useDispatch } from 'react-redux';
import { request } from 'src/features/user/userSlice';
import { kApiSignup } from 'src/config/WebService';

const SignUp = () => {
  const navigation = useNavigation()
  const [pwd, setPwd] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch();
  
  return (
    <View flex={1}>
      <View flex={6}>
        <TextInput 
          style={globalStyle().TextInputComponent}
          onChangeText={setName} 
          value={name} 
          placeholder={"Enter Name"}
          autoCapitalize={'none'}
        />
        <TextInput 
          style={globalStyle().TextInputComponent}
          onChangeText={setEmail} 
          value={email} 
          placeholder={"Enter Email"}
          autoCapitalize={'none'}
        />
        <TextInput 
          style={globalStyle().TextInputComponent}
          value={pwd} 
          onChangeText={setPwd} 
          placeholder={"Enter Pwd"}
          autoCapitalize={'none'}
        />
        <TouchableOpacity 
          style={globalStyle().button} 
          onPress={() => {
            if(!!email & !!pwd) {
              dispatch(request({url: kApiSignup, data: {name: name, email: email, password:pwd}}))
            }
            else {
              return Alert.alert('Missing Information', 'Fill up at least the email and password')
            }
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View flex={1}>
        <Button title="Have an account? Log In" onPress={() => {navigation.navigate('Log In')}}/>
        <Button title="(useContext example page)" onPress={() => {navigation.navigate('ReactContext')}}/>
      </View>
    </View>
  )
}

export default SignUp
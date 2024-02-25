import { View, Text, Button, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import globalStyle from 'src/styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {request} from 'src/features/user/userSlice'
import { kApiLogin } from 'src/config/WebService';

const LogIn = () => {
  const navigation = useNavigation()
  const [pwd, setPwd] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch();

  // const [error, setError] = useState()
  //   const user = useSelector(state => state.user)
  //   useEffect(() => {
  //     setError(user.data?.error ? true : false)
  //   }, [user])
  
  
  return (
    <View flex={1}>
      <View flex={9}>
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
                dispatch(request({url: kApiLogin, data: { email: email, password:pwd}}))
              }
              else {
                return Alert.alert('Missing Information', 'Fill up email and password')
              }
            }}
          >
            <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View flex={1}>
        {/* <Button title='Log In' onPress={() => {setIsLoggedIn(true)}}/> */}
        <Button title="Don't have an account? Sign Up" onPress={() => {navigation.navigate('Sign Up')}}/>
      </View>
    </View>
  )
}

export default LogIn

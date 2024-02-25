import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from 'src/features/user/userSlice'
import { kApiLogOut } from 'src/config/WebService'

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  // const user = useSelector(state => state.user)
  
  return (
    <View>
      <Button title='Log Out' onPress={() => {
        dispatch(logOutUser({
          url: kApiLogOut, 
          // access_token: user?.data?.id
        }))
      }}/>
      <Button title='Fetch' onPress={() => {navigation.navigate('Fetch')}}/>
    </View>
  )
}

export default HomeScreen
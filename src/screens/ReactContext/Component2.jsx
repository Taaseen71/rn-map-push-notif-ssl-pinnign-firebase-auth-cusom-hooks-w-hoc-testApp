import { View, Text } from 'react-native'
import React from 'react'
import Component3 from './Component3'

const Component2 = () => {
  return (
    <View>
      <Text>Component2</Text>
      <Text><Component3/></Text>
    </View>
  )
}

export default Component2
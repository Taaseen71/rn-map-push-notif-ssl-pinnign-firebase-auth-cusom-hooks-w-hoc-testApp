import { View, Text } from 'react-native'
import React from 'react'
import Component2 from "./Component2"

const Component1 = () => {
  return (
    <View>
      <Text>Component1</Text>
      <Text><Component2/></Text>
    </View>
  )
}

export default Component1
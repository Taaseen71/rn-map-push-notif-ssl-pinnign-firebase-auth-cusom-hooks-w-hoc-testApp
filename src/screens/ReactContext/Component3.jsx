import { View, Text } from 'react-native'
import React from 'react'
import { useUserContext } from 'src/contexts/UserContext'

const Component3 = () => {
    const context = useUserContext()
  return (
    <View>
      <Text>Component 3</Text>
      <Text>This is a value passed down as useContext: {context}</Text>
    </View>
  )
}

export default Component3
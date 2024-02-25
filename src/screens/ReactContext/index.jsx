import { View, Text } from 'react-native'
import React from 'react'
import { UserContextProvider } from 'src/contexts/UserContext'
import Component1 from './Component1'

const ReactContext = () => {
    const user = 'Saad'
    
  return (
    <View>
      <Text>React Context Template</Text>
      <UserContextProvider value={user}>
        <Component1 />
      </UserContextProvider>
    </View>
  )
}

export default ReactContext
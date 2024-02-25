import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TouchButton = ({buttonName, color, pressFunction}) => {
  return (
    <TouchableOpacity 
      style={{backgroundColor: color, flex: 1, justifyContent: 'center', alignItems: 'center'}}
      onPress={pressFunction}
      //navigation is passed automatically through Stacks and can be called as props
    >
      <Text>{buttonName}</Text>
    </TouchableOpacity>
  )
}

export default TouchButton
import { View, Text, Button } from 'react-native'
import React from 'react'
import {take, put, call, fork} from 'redux-saga'
import {useDispatch} from 'react-redux';
import {request} from 'src/features/item/itemSlice';
import {kApiGetItems} from 'src/config/WebService';


const ReactSagaScreen = () => {
    // const [items, setItems] = React.useState([])
    // const [isFetching, setIsFetching] = React.useState(false)
    // const [failure, setFailure ] = React.useState(false)
    // const [errMsg, setErrMsg] = React.useState(undefined)

    const dispatch = useDispatch();

    // const apiRequest = () => {
    //     setIsFetching(true)
    // }

    // const apiSuccess = (arg) => {
    //     setIsFetching(false);
    //     setItems(arg);
    //     setFailure(false);
    //     setErrMsg(undefined)
    // }

    // const apiFailure = (arg) => {
    //     setIsFetching(false)
    //     setFailure(true)
    //     setErrMsg(arg)
    // }
    
  return (
    <View>
      <Text>index</Text>
      <Button
        title={'Call Api'}
        onPress={() => {
          dispatch(request({url: kApiGetItems}));
        }}
      />
    </View>
  )
}

export default ReactSagaScreen
import { View, Text, Button} from 'react-native'
import React,{useEffect} from 'react'
import ApiHelper from '../../helpers/ApiHelper';
import { kApiToDos } from '../../config/WebService';
import { useNavigation } from '@react-navigation/native'
// const FetchData = async (link) => {
//     try {
//         const resultBlob = await fetch(link);
//         const result = await resultBlob.json();
//         console.log(result.slice(0, 4));
//         return result.slice(0, 7);
//       } 
//     catch (error) {
//       console.error('Error fetching data:', error);
//       return [];
//     }
// }


// const FetchData = async(link) => {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const responseJSON = await response.json()
//     console.log(responseJSON)
// }
// useEffect(() => {
//     FetchData();
// }, [])


const Fetch = () => {
    const navigation = useNavigation()

    useEffect(() => {
      ApiHelper.get(kApiToDos).then(data => {
        console.log(data)
      })
    }, [])
    

  return (
    <View flex={1}>
        <Text>FETCH Screen</Text>
        <Button
					title={'Get object'}
					onPress={() => {
							  console.log(ApiHelper.get(kApiToDos).then(data => {
									console.log(data)
								}));
					}}
				/>
        <Button title='HomeScreen' onPress={() => {navigation.navigate('Home')}}/>
    </View>
  )
}

export default Fetch
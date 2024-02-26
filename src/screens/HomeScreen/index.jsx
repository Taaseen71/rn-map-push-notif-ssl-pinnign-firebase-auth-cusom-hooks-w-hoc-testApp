import {View, Text, Button, Platform, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {firebaseLogOut} from 'src/helpers/FirebaseHelper';
import NotificationHelper from 'src/helpers/NotificationHelper';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [notificationsOn, setNotificationsOn] = useState(false);
  const askForPermission = () => {
    Platform.OS == 'ios'
      ? NotificationHelper.requestNotificationPermissionForiOS()
      : NotificationHelper.requestNotificationPermissionForAndroid();
  };

  useEffect(() => {
    // askForPermission();
  }, []);

  const loadToken = async () => {
    let token = await NotificationHelper.getDeviceTokenForAndroid();
    console.log(token);
  };

  useEffect(() => {
    loadToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived!',
        JSON.stringify(remoteMessage.notification?.title),
      );
      if (remoteMessage.data.route == 'fetch') {
        navigation.navigate('PokeScreen');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      {/* <Button
        title="Activate Notification Permissions"
        onPress={() => {
          setNotificationsOn(!notificationsOn);
        }}
      /> */}
      <Button
        title="Log Out"
        onPress={() => {
          firebaseLogOut();
        }}
      />
      <Button
        title="Pokemon Api"
        onPress={() => {
          navigation.navigate('PokeScreen');
        }}
      />
    </View>
  );
};

export default HomeScreen;

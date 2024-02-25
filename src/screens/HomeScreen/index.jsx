import {View, Text, Button, Platform, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {firebaseLogOut} from 'src/helpers/FirebaseHelper';
import NotificationHelper from 'src/helpers/NotificationHelper';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  // const navigation = useNavigation();
  const [notificationsOn, setNotificationsOn] = useState(false);
  const askForPermission = () => {
    Platform.OS == 'ios'
      ? NotificationHelper.requestNotificationPermissionForiOS()
      : NotificationHelper.requestNotificationPermissionForAndroid();
  };

  useEffect(() => {
    notificationsOn && askForPermission();
  }, [notificationsOn]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <Button
        title="Activate Notification Permissions"
        onPress={() => {
          setNotificationsOn(!notificationsOn);
        }}
      />
      <Button
        title="Log Out"
        onPress={() => {
          firebaseLogOut();
        }}
      />
      {/* <Button
        title="Fetch"
        onPress={() => {
          navigation.navigate('Fetch');
        }}
      /> */}
    </View>
  );
};

export default HomeScreen;

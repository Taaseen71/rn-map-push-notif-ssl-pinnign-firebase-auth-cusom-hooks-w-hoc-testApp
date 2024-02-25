import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

class NotificationHelper {
  constructor() {
    console.log(' Notification helper');
  }

  requestNotificationPermissionForiOS = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  requestNotificationPermissionForAndroid = async () => {
    try {
      let granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        alert('Notifications Permission Granted ');
      } else {
        alert('Notifications Permission Not Granted');
      }
    } catch (err) {
      console.log('Notification Permission Error ==>', err);
      alert('Error With Notification Permission');
    }
  };

  getDeviceTokenForAndroid = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    return token;
  };

  setBackgroundNotificationForAndroid = () => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  };
}

export default new NotificationHelper();

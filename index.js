/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NotificationHelper from 'src/helpers/NotificationHelper';

NotificationHelper.setBackgroundNotificationForAndroid();
AppRegistry.registerComponent(appName, () => App);

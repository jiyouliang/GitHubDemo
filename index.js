/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import WelcomePage from './js/page/WelcomePage';
import {name as appName} from './app.json';
import HomePage from './js/page/HomePage'
import AppNavigators from './js/navigator/AppNavigators'

AppRegistry.registerComponent(appName, () => AppNavigators);

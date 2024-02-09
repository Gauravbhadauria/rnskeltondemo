/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Welcome from './Welcome';

AppRegistry.registerComponent(appName, () => Welcome);

import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenIndia from '../screens/ScreenIndia';
import ScreenStates from '../screens/ScreenStates';


const BottomTabNavigator = createBottomTabNavigator({
  'Overall India': ScreenIndia,
  'State wise': ScreenStates
}, {
  tabBarOptions: {
    showLabel: true
  }
});

export default BottomTabNavigator;
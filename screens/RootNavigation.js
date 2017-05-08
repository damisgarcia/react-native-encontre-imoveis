import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const RootNavigation = StackNavigator({
  Home: { screen: HomeScreen },
});

export default RootNavigation;

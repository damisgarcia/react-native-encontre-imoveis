import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PlacesScreen from '../screens/PlacesScreen';

const RootNavigation = StackNavigator({
  Home:   { screen: HomeScreen },
  Places: { screen: PlacesScreen },
});

export default RootNavigation;

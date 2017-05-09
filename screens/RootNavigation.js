import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PlaceScreen from '../screens/PlaceScreen';
import PlacesScreen from '../screens/PlacesScreen';

const RootNavigation = StackNavigator({
  Home:   { screen: HomeScreen },
  Place:  { screen: PlaceScreen },
  Places: { screen: PlacesScreen },
});

export default RootNavigation;

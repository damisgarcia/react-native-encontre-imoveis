import {
  StackNavigator,
} from 'react-navigation';

import HomeScreenContainer from '../containers/HomeScreenContainer';

const RootNavigation = StackNavigator({
  Home: { screen: HomeScreenContainer },
});

export default RootNavigation;

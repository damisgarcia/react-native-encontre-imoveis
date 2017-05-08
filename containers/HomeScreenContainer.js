import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationStyle from '../constants/NavigationStyle';

import * as ApplicationActions from '../actions/ApplicationActions';
import HomeScreen from '../screens/HomeScreen';

class HomeScreenContainer extends React.Component {
  static navigationOptions = { ...NavigationStyle,  title: "Blank Template" };

  render() {
    return (
      <HomeScreen {...this.props} />
    );
  }
};

function mapStateToProps(state) {
  return {
    state: state.app
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ApplicationActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer);

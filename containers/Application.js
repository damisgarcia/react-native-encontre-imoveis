import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ApplicationActions from '../actions/ApplicationActions';

import HomeScreen from '../screens/HomeScreen';

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

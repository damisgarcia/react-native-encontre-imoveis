import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ApplicationActions from '../actions/ApplicationActions';

import { Text, View } from 'react-native';
import {
  Container,
  Content,
  Header,
  Title,
  Left,
  Right,
  Body,
  Button,
  Icon
} from 'native-base';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    setInterval(
      ()=> this.props.actions.incremment(),
      1000
    )
  }

  render() {
    let { state } = this.props

    return (
      <Container>
        <Content>
          <View style={styles.hero}>
            <Text style={styles.counter}>{state.count}</Text>
            <Text>Hello Word with Redux!</Text>
          </View>
        </Content>
      </Container>
    );
  }
};

const styles = {
  hero: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 64,
    alignItems: 'center',
  },
  counter: {
    fontSize: 48,
  }
};

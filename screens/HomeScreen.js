import React from 'react';
import { Text, View } from 'react-native';
import NavigationStyle from '../constants/NavigationStyle';
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
  static navigationOptions = { ...NavigationStyle,  title: "Blank Template" };

  state = {
    count: 0
  }

  componentDidMount() {
    setInterval(
      ()=> this.setState({count: this.state.count + 1}),
      1000
    )
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.hero}>
            <Text style={styles.counter}>{this.state.count}</Text>
            <Text>Hello Word with React Native!</Text>
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

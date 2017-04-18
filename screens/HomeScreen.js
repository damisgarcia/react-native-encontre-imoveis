import React from 'react';
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
        <Header>
            <Left>
              <Button transparent>
                  <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
                <Title>Blank Template</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
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

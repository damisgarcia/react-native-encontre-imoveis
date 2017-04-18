import React from 'react';
import { Text} from 'react-native';
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
        <Header style={styles.header}>
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
          <Text style={styles.counter}>{state.count}</Text>
          <Text>Hello Word with Redux!</Text>
        </Content>
      </Container>
    );
  }
};

const styles = {
  header: {
    marginTop: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  counter: {
    fontSize: 48
  }
};

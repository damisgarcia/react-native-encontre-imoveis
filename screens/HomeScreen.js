import React from 'react';
import { Text, View } from 'react-native';
import NavigationStyle from '../constants/NavigationStyle';
import {
  Container,
  Content,
  Body,
  Button,
  Icon,
  Item,
  Input,
} from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = { ...NavigationStyle,  title: "Encontre Imoveis" };

  state = {
    textSearch: '',
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
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <Item underline>
              <Input placeholder="Bairro, Cidade" value={this.state.textSearch} onChangeText={ (textSearch)=> this.setState({textSearch})} />
            </Item>
            <Button style={styles.button} primary block>
              <Text style={styles.textButton}>Pesquisar Imóvel</Text>
            </Button>
            <Text>{this.state.textSearch}</Text>
          </View>
        </Content>
      </Container>
    );
  }
};

const styles = {
  container: {
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginTop: 24,
    marginBottom: 24
  },
  textButton: {
    color: 'white',
  }
};

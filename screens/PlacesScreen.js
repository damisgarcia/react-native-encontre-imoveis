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

import Nestoria from '../services/Nestoria';

export default class PlacesScreen extends React.Component {
  static navigationOptions = { ...NavigationStyle,  title: "Resultado Pesquisa" };

  state = {
    textSearch: '',
    count: 0
  }

  componentDidMount(){
    const { state } = this.props.navigation;
    Nestoria.searchByPlaceName(state.params.textSearch, this._onGetPlaces, this._onGetPlacesFail);
  }

  render() {
    const { state } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <Text>Resultado Pesquisa Screen</Text>
            <Text>{state.params.textSearch}</Text>
          </View>
        </Content>
      </Container>
    );
  }
  _onGetPlaces(response){
    console.log(response)
  }

  _onGetPlacesFail(err){
    console.log(err)
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

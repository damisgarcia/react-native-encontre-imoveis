import React from 'react';
import { Text, View, Image } from 'react-native';
import NavigationStyle from '../constants/NavigationStyle';
import {
  Container,
  Content,
  Body,
  Button,
  Icon,
} from 'native-base';

import Nestoria from '../services/Nestoria';

export default class PlaceScreen extends React.Component {
  static navigationOptions = {
    ...NavigationStyle,
    title: ({state})=> state.params.place.title
  }

  render() {
    const { state } = this.props.navigation;
    const { place } = state.params
    return (
      <Container style={styles.container}>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={{uri: place.img_url}}></Image>
        </View>
        <Content>
          <View style={styles.content}>
            <Text>{place.title}</Text>
            <Text note>{place.sumary}</Text>
            <Text note>{place.keywords}</Text>
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
    padding: 16
  },
  button: {
    marginTop: 24,
    marginBottom: 24
  },
  pictureContainer: {
    flex:1,
    alignItems: 'stretch'
  },
  picture:{
    flex: 1
  },
};

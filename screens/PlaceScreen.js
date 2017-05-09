import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import NavigationStyle from '../constants/NavigationStyle';
import {
  Container,
  Content,
  Body,
  Row,
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
    console.log(place.latitude, place.longitude)
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
            <Row>
              <Button style={styles.button} primary onPress={ ()=> Linking.openURL(place.lister_url).catch(onLinkFail) }>
                <Text style={styles.textButton}>{'Ver no site'.toUpperCase()}</Text>
              </Button>
              <Button style={styles.button} light onPress={ ()=> Linking.openURL(`geo:${place.latitude},${place.longitude}?q=${place.latitude},${place.longitude}(${place.title}),`).catch(onLinkFail) }>
                <Text>{'Ver no mapa'.toUpperCase()}</Text>
              </Button>
            </Row>
          </View>
        </Content>
      </Container>
    );
  }
};

const onLinkFail = (err)=>{
  console.error('An error occurred', err);
}

const styles = {
  container: {
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 16
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 8
  },
  textButton: {
    color: 'white',
  },
  pictureContainer: {
    flex:1,
    alignItems: 'stretch'
  },
  picture:{
    flex: 1
  },
};

import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import NavigationStyle from '../constants/NavigationStyle';
import {
  Container,
  Content,
  Body,
  Button,
  Icon,
  Item,
  Input,
  Thumbnail,
  List,
  ListItem,
} from 'native-base';

import Nestoria from '../services/Nestoria';

export default class PlacesScreen extends React.Component {
  static navigationOptions = { ...NavigationStyle,  title: "Resultado Pesquisa" };

  state = {
    places: [],
    loading: true
  }

  componentDidMount(){
    const { state } = this.props.navigation;
    Nestoria.searchByPlaceName(state.params.textSearch, (r)=> this._onGetPlaces(r), (err)=> this._onGetPlacesFail(err));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <ActivityIndicator
              animating={this.state.loading}
              style={{ height: (this.state.loading ? 80 : 0) }}
              size="large" />

            <List dataArray={this.state.places}
              renderRow={(item) =>
                <ListItem>
                  <Thumbnail style={styles.thumb} square size={80} source={{uri: item.thumb_url}} />
                  <Body>
                    <Text>{item.title}</Text>
                    <Text note>{item.datasource_name}</Text>
                  </Body>
                </ListItem>
              }></List>
          </View>
        </Content>
      </Container>
    );
  }
  _onGetPlaces(response){
    this.setState({places: response.data.response.listings, loading: false})
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
  },
  button: {
    marginTop: 24,
    marginBottom: 24
  },
  thumb: {
    marginRight: 8
  }
};

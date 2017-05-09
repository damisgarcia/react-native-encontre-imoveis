import React from 'react';
import { ActivityIndicator, Text, View, ListView } from 'react-native';
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
    places: [],
    loading: true
  }

  componentDidMount(){
    const { state } = this.props.navigation;
    Nestoria.searchByPlaceName(state.params.textSearch, (r)=> this._onGetPlaces(r), (err)=> this._onGetPlacesFail(err));
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <ActivityIndicator
              animating={this.state.loading}
              style={{ height: (this.state.loading ? 80 : 0) }}
              size="large" />

            <ListView
              enableEmptySections={true}
              dataSource={ds.cloneWithRows(this.state.places)}
              renderRow={(rowData) => <Text>{rowData.title}</Text>}/>
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

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import ItemContainer from '../LandingPage/ItemContainer';
import SearchContainer from './SearchContainer'


const API_URL = 'http://localhost:3000/places/favorites';
// const API_URL = 'http://boiling-refuge-94422.herokuapp.com/places/favorites';
const DEFAULT_NUM_ITEMS = 10;

class FavoriteContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      favorites:this.ds.cloneWithRows([]),
      numItems: DEFAULT_NUM_ITEMS,
      loaded: false,
    }
  }

  componentDidMount() {
    this.fetchFavoriteData();
  }

  endReached() {
    var num = this.state.numItems + 10;
    this.setState({
      numItems: num,
      favorites: this.ds.cloneWithRows(this.state.todayData.slice(0, num))
    });
  }

  fetchFavoriteData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        favoritesData: responseData,
        favorites: this.ds.cloneWithRows(responseData.slice(0, DEFAULT_NUM_ITEMS)),
        loaded: true,
      });
    })
    .done();
  }

  pressSearch(){
    this.props.navigator.push({
      title: 'Search',
      component: <SearchContainer/>
    })
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
      <Text>
      Loading results...
      </Text>
      </View>
    );
  }

  renderOne(place) {
    return (
      <ItemContainer key={place.id} place={place} />
    )
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    if(this.state.favoritesData.length == 0){
      return(
        <View style={styles.emptyContainer}>
        <Text style={styles.bold}>Nothing to see here</Text>
        <Text style={styles.normal}>Keep on exploring and build up this page!</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableHighlight
        onPress={this.pressSearch.bind(this)}
        style={styles.touchable}>
        <View style={styles.button}>
        <Text style={styles.welcome}> Filter Results </Text>
        </View>
        </TouchableHighlight>
        </View>
        <ListView
        dataSource={this.state.favorites}
        onEndReachedThreshold={10}
        onEndReached={this.endReached.bind(this)}
        enableEmptySections={true} // This will stop the warning for sempty sections headers
        renderRow={this.renderOne.bind(this)}
        />
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  emptyContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  normal:{
    fontSize:15,
  },
  bold:{
    fontWeight: 'bold',
    fontSize:16,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  buttonContainer:{
    marginTop:40,
    marginBottom:15,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'

  },
  button: {
    backgroundColor: '#35d37c',
    height: 40,
    width: 200,
    borderRadius:10,
    justifyContent: 'center'
  },
  touchable: {
    borderRadius: 10
  },
})


module.exports = FavoriteContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

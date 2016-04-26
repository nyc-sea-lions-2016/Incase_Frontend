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

class FavoriteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { favorites: []}
    }

    componentDidMount() {
        this.fetchFavoriteData();
    }

    fetchFavoriteData() {
      fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('responseData', responseData);
        this.setState({
          favorites: responseData
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

  render() {
    var listNodes = this.state.favorites.map(function(place){
      return(
          <ItemContainer key={place.id} place={place} />
      )
    })

    if(this.state.favorites.length == 0){
      return(
        <View style={styles.container}>
          <Text>Add some places you would like to explore to build up this page!</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View>
            <TouchableHighlight onPress={this.pressSearch.bind(this)} >
              <Text style={styles.filterText}> Filter Results </Text>
            </TouchableHighlight>
          </View>
          {listNodes}
        </View>
      );
    }
  }
}

  var styles = StyleSheet.create({
    container: {
      top: 25,
      flex: 1,
      paddingTop:40,
      backgroundColor: "#409ce9",
    },
    filterText:{
      fontWeight:'bold',
      color:'#fff',
      textAlign:'left',
      fontSize:20,
      marginBottom:10,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      textAlign: 'center'
    }
  })


module.exports = FavoriteContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

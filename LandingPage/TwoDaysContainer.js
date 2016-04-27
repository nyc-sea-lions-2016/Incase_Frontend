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

import PlaceContainer from '../PlacePage/PlaceContainer';
import ItemContainer from '../LandingPage/ItemContainer';
import SearchContainer from './SearchContainer'


const API_URL = 'http://boiling-refuge-94422.herokuapp.com/places/two_days';
//const API_URL ='http://localhost:3000/places/two_days';
const DEFAULT_NUM_ITEMS = 10;

class TwoDaysContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      twoDays: this.ds.cloneWithRows([]),
      twoDaysData: [],
      numItems: DEFAULT_NUM_ITEMS,
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchTwoDaysData();
  }

  endReached() {
    var num = this.state.numItems + 10;``
    this.setState({
      numItems: num,
      twoDays: this.ds.cloneWithRows(this.state.twoDaysData.slice(0, num))
    });
  }

  endReached() {
    var num = this.state.numItems + 10;
    this.setState({
      numItems: num,
      today: this.ds.cloneWithRows(this.state.twoDaysData.slice(0, num))
    });
  }

  fetchTwoDaysData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        twoDaysData: responseData,
        twoDays: this.ds.cloneWithRows(responseData.slice(0, DEFAULT_NUM_ITEMS)),
        loaded: true,
      });
    })
    .done();
  }

  pressSearch(){
    //console.log(this.state.todayData)
    this.props.navigator.push({
      title: 'Search',
      component: <SearchContainer
      todayData={this.state.twoDaysData}
      navigator={this.props.navigator}
      day={'twoDays'}
      />
    })
  }

  renderLoadingView() {
    return (
      <View style={twoDayContainerStyle.container}>
        <Text>
        Loading results...
        </Text>
      </View>
    );
  }

  pressItem(id, place) {
      this.props.navigator.push({
        title: 'Two Days List',
        component: <PlaceContainer
        place={place}
          />
      })
  }

  renderOne(place) {
    return (
      <View >
        <TouchableHighlight onPress={this.pressItem.bind(this, place.id, place)}>
          <ItemContainer style={styles.button} key={place.id} place={place}/>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    if(this.state.twoDaysData.length == 0){
      return(
        <View style={twoDayContainerStyle.emptyContainer}>
        <Text style={twoDayContainerStyle.bold}>Nothing to see here</Text>
        <Text style={twoDayContainerStyle.normal}>Keep on exploring and build up this page!</Text>
        </View>
      )
    } else {
      return (
        <View style={twoDayContainerStyle.container}>
        <View style={twoDayContainerStyle.buttonContainer}>
        <TouchableHighlight
        onPress={this.pressSearch.bind(this)}
        style={twoDayContainerStyle.touchable}>
        <View style={twoDayContainerStyle.button}>
        <Text style={twoDayContainerStyle.welcome}> Filter Results </Text>
        </View>
        </TouchableHighlight>
        </View>
        <ListView
        dataSource={this.state.twoDays}
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

var twoDayContainerStyle = StyleSheet.create({
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


module.exports = TwoDaysContainer
// style={twoDayContainerStyle.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

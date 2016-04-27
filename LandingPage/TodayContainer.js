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
import SearchContainer from './SearchContainer';

//var RefreshableListView = require('react-native-refreshable-listview');


// const API_URL = 'http://boiling-refuge-94422.herokuapp.com/places/today';
const API_URL ='http://localhost:3000/places/today';
const DEFAULT_NUM_ITEMS = 10;


class TodayContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      today: this.ds.cloneWithRows([]),
      numItems: DEFAULT_NUM_ITEMS
    };
  }

  componentDidMount() {
    this.fetchTodayData();
  }

  endReached() {
    console.log('abcdefg', 'end Reached');
    var num = this.state.numItems + 10;
    this.setState({
      numItems: num,
      today: this.ds.cloneWithRows(this.state.todayData.slice(0, num))
    });
    console.log(this.state);
  }


  fetchTodayData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('responseData Brian', responseData);
      console.log('offset', this.state.offset);
      this.setState({
        todayData: responseData,
        today: this.ds.cloneWithRows(responseData.slice(0, DEFAULT_NUM_ITEMS))
      });
    })
    .done();
  }

  pressSearch(){
    console.log(this.state.todayData)
    this.props.navigator.push({
      title: 'Search',
      component: <SearchContainer
      todayData={this.state.todayData}
      navigator={this.props.navigator}
      />
    })
  }

  //
  // pressItem(id, place) {
  //     this.props.navigator.push({
  //       component: <PlaceContainer
  //         place={place}
  //         />
  //     })
  // }

  renderOne(place) {
    return(
// onPress={this.pressItem.bind(this, place.id, place)
      <View>
        <TouchableHighlight>
          <View>
            <ItemContainer style={styles.button} key={place.id} place={place} />
          </View>
        </TouchableHighlight>
      </View>

    )
  }

  render() {
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
           dataSource={this.state.today}
           renderRow={this.renderOne}
           onEndReachedThreshold={8}
           onEndReached={this.endReached.bind(this)}
        />
      </View>
    );
  }
}

  var styles = StyleSheet.create({
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



module.exports = TodayContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

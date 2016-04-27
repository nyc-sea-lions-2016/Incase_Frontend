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

//const API_URL = 'http://boiling-refuge-94422.herokuapp.com/places/yesterday';

const API_URL = 'http://localhost:3000/places/today';
const DEFAULT_NUM_ITEMS = 10;

class YesterdayContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      yesterday: this.ds.cloneWithRows([]),
      numItems: DEFAULT_NUM_ITEMS,
      yesterdayData: [],
      loaded: false,
    };
  }

  componentDidMount() {
      this.fetchYesterdayData();
  }

  endReached() {
    var num = this.state.numItems + 10;
    this.setState({
      numItems: num,
      today: this.ds.cloneWithRows(this.state.todayData.slice(0, num))
    });
  }

  fetchYesterdayData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        yesterday: this.ds.cloneWithRows(responseData),
        yesterdayData: responseData,
        loaded: true,
      });
    })
    .done();
  }

  pressSearch(){
    this.props.navigator.push({
      title: 'Search',
      component: <SearchContainer
      todayData={this.state.yesterdayData}
      navigator={this.props.navigator}
      />
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

  pressItem(id, place) {
    this.props.navigator.push({
      title: 'Yesterday List',
      component: <PlaceContainer
      place={place}
      />
    })
  }

  renderOne(place) {
    return (
      <View>
        <TouchableHighlight onPress={this.pressItem.bind(this, place.id, place)}>
          <ItemContainer key={place.id} place={place} />
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    if(this.state.yesterdayData.length == 0){
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
              onPressIn={this._onPressIn}
              onPressOut={this._onPressOut}
              style={styles.touchable}>
              <View style={styles.button}>
                <Text style={styles.welcome}> Filter Results </Text>
              </View>
            </TouchableHighlight>
          </View>
          <ListView
            dataSource={this.state.yesterday}
            enableEmptySections={true}
             enableEmptySections={true}
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
    welcome: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      color: '#FFFFFF'

    },
    buttonContainer:{
      marginTop:40,
      marginBottom:15,
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


module.exports = YesterdayContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

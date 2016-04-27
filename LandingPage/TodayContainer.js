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

//var RefreshableListView = require('react-native-refreshable-listview');

const API_URL = 'https://boiling-refuge-94422.herokuapp.com/places/today';


class TodayContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      today: this.ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
      this.fetchTodayData();
  }


  fetchTodayData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('responseData', responseData);
      this.setState({
        today: this.ds.cloneWithRows(responseData)
      });
    })
    .done();
  }

  reloadContainer() {
    // returns a Promise of reload completion
    // for a Promise-free version see ControlledRefreshableListView below
     this.fetchTodayData()
  }

  pressSearch(){
    this.props.navigator.push({
      title: 'Search',
      component: <SearchContainer/>
    })
  }
  renderOne(place) {
    return(
        <ItemContainer key={place.id} place={place} />
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
           loadData={this.reloadContainer}
           minDisplayTime={4}
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

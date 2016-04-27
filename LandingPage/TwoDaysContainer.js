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

// const API_URL = 'http://boiling-refuge-94422.herokuapp.com/places/two_days';

const API_URL ='http://localhost:3000/places/two_days';


class TwoDaysContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      twoDays: this.ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
      this.fetchTwoDaysData();
  }

  fetchTwoDaysData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('responseData', responseData);
      this.setState({
        twoDays: responseData
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

  renderOne(place) {
    return (
      <ItemContainer key={place.id} place={place} />
    )
  }

  render() {
    if(this.state.twoDays.length == 0){
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
             dataSource={this.state.twoDays}
             renderRow={this.renderOne}
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


module.exports = TwoDaysContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

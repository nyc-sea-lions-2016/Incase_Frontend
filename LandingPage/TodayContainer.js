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


const API_URL = 'http://boiling-refuge-94422.herokuapp.com/places/today';


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

  pressSearch(){
    this.props.navigator.push({
      title: 'Search',
      component: <SearchContainer/>
    })
  }

  pressItem(id, place) {
      this.props.navigator.push({
      component: <PlaceContainer
      name={place.name}
      address={place.address}
      />
    })
  }

  renderOne(place) {
    return(
      <View>
        <TouchableHighlight onPress={this.pressItem.bind(this, place.id, place)} >
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
        <View>
          <TouchableHighlight onPress={this.pressSearch.bind(this)} >
            <Text style={styles.filterText}> Filter Results </Text>
          </TouchableHighlight>
        </View>

          <ListView
             dataSource={this.state.today}
             renderRow={this.renderOne.bind(this)}
          />
      </View>
    );
  }
}

  var styles = StyleSheet.create({
    container: {
      top: 25,
      flex: 1,
      paddingTop:40,
      backgroundColor: "#409ce9",
    },
    filterText: {
      fontWeight:'bold',
      color:'#fff',
      textAlign:'left',
      fontSize:20,
      marginBottom:10,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      textAlign: 'center',
    },

    button: {
      paddingTop: 2,
      marginTop: 10,
      borderRadius: 5,
      alignItems: "center",
      alignSelf: "center",
      width: 120,
      height: 20,
      backgroundColor: "#35d37c",
    }
  })


module.exports = TodayContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

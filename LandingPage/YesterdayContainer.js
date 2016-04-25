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

const API_URL = 'http://localhost:3000/places/yesterday';

class YesterdayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yesterday: []
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
        yesterday: responseData
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
    // console.log('props', this.props)
    var listNodes = this.state.yesterday.map(function(place){
      return(
          <ItemContainer key={place.id} place={place} />
      )
    })


    if(this.state.yesterday.length == 0){
      return(
        <View style={styles.container}>
          <Text>Keep on exploring and build up this page!</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View>
            <TouchableHighlight onPress={this.pressSearch.bind(this)} >
              <Text> Filter Results </Text>
            </TouchableHighlight>
          </View>
          <View>
            {listNodes}
          </View>
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
      textAlign: 'center',
    }
  })


module.exports = YesterdayContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

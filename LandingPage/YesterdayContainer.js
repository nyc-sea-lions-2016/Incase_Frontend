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


const API_URL = 'http://boiling-refuge-94422.herokuapp.com/places/yesterday';


class YesterdayContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      yesterday: this.ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
      this.fetchYesterdayData();
  }

  fetchYesterdayData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('responseData', responseData);
      this.setState({
        yesterday: this.ds.cloneWithRows(responseData)
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
    // console.log('props', this.props)

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
            <TouchableHighlight onPress={this.pressSearch.bind(this)} date={yesterday} >
              <Text style={styles.filterText}> Filter Results </Text>
            </TouchableHighlight>
          </View>
            <ListView
            dataSource={this.state.yesterday}
            renderRow={this.renderOne}
            />
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

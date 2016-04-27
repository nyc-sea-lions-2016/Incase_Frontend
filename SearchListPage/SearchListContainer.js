import React, {
  StyleSheet,
  ListView,
  AppRegistry,
  DatePickerIOS,
  Component,
  TouchableHighlight,
  Text,
  View
  } from 'react-native';

import ItemContainer from '../LandingPage/ItemContainer'
import PlaceContainer from '../PlacePage/PlaceContainer'
class SearchListContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      searchItem: this.ds.cloneWithRows(this.props.filteredData)
    };
  }

  pressItem(id, place) {
      this.props.navigator.push({
        title: 'Filtered List',
        component: <PlaceContainer
        place={place}
          />
      })
  }

  renderOne(place) {
    return(
      <View >
      <TouchableHighlight onPress={this.pressItem.bind(this, place.id, place)}>
        <ItemContainer style={styles.button} key={place.id} place={place}/>
      </TouchableHighlight>
      </View>
    )
  }
    render() {
      return(
        <View>
          <ListView
            dataSource={this.state.searchItem}
            renderRow={this.renderOne.bind(this)}
          />
        </View>
      )
    }

}


  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
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

module.exports = SearchListContainer

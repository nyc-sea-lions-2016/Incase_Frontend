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

class ListContainer extends Component {
  constructor(props) {
    super(props);
    }

  componentWillReceiveProps(nextProps) {
    this.setState({places: nextProps})
  }

  pressSearch(){
    this.props.navigator.push({
      title: 'Search',
      component: <SearchContainer/>
    })
  }

  render() {
    var listNodes = this.props.places.map(function(place){
      return(
          <ItemContainer key={place.id} place={place} />
      )
    })
    var date = (this.props.places[0])
    // debugger;
    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight onPress={this.pressSearch.bind(this)} >
            <Text> Click me to filter your results </Text>
          </TouchableHighlight>
        </View>
        {listNodes}
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
    }
  })


module.exports = ListContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

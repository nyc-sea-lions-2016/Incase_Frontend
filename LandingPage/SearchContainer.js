import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SearchElement from '../LandingPage/SearchElement'

class SearchContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <SearchElement />
        <SearchElement />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    top: 25,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: '#2199e8',
  }
})

module.exports = SearchContainer

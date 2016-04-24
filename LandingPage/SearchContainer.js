import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import SearchElement from '../LandingPage/SearchElement'
import TimeElement from '../LandingPage/TimeElement'

class SearchContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
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

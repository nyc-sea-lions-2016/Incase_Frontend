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
import StartTimeElement from '../LandingPage/StartTimeElement'

class SearchContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <SearchElement
        navigator={this.props.navigator}
        todayData={this.props.todayData}
        day={this.props.day}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'rgba(143, 185, 243,0.1)',
  }
})

module.exports = SearchContainer

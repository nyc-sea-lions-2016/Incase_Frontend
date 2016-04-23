import React, {
  AppRegistry,
  Component,
  StyleSheet,
  MapView,
  Text,
  View
} from 'react-native';

import HoodElement from '../LandingPage/HoodElement';

class HoodIndex extends Component {
  render(){
    return (
      <View style={styles.container}>
        <HoodElement/>
        <HoodElement/>
        <HoodElement/>
        <HoodElement/>
        <HoodElement/>
        <HoodElement/>
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

module.exports = HoodIndex

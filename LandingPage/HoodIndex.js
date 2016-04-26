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
      <View>
        <HoodElement todayData={this.props.todayData}/>
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

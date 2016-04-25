import React, {
  StyleSheet,
  AppRegistry,
  DatePickerIOS,
  Component,

  Text,
  View
  } from 'react-native';

class SearchListContainer extends Component {

    render() {
      debugger
      return(
        <View>
        <Text>{this.props.startDate.toLocaleDateString()}</Text>
        <Text>{this.props.endDate.toLocaleDateString()}</Text>
        </View>
      )
    }

}

module.exports = SearchListContainer

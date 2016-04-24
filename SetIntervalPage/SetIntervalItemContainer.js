import React, {
  Image,
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  class SetIntervalItemContainer extends Component {
    render() {
      return (
        <View style={setItemStyles.container}>
          <SetIntervalElementContainer/>
        </View>
      )
    };
  }

  const setItemStyles = StyleSheet.create({
    container: {
      paddingTop: 100,
      backgroundColor: "orange",
      width: 300,
      height: 675,
      alignItems: "center",
      borderRadius: 10,
    }
  })

module.exports = SetIntervalItemContainer

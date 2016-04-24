import React, {
  Image,
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  class SetIntervalElementContainer extends Component {
    render() {
      return (
        <View style={setElementStyles.container}>
          <View style={setElementStyles.elementArea}>
            <Text style={setElementStyles.header}>
              Start!
            </Text>
          </View>


          <View style={setElementStyles.elementArea}>
            <Text style={setElementStyles.header}>
              End!
            </Text>
        </View>
      </View>
      )
    };
  }

  const setElementStyles = StyleSheet.create({
    container: {
      backgroundColor: "orange",
    },

    elementArea: {
      width: 240,
      backgroundColor: "green",
      marginBottom: 100,

    },

    header: {
      alignSelf: "center",
      color: "#FFFFFF",
      fontSize: 32,
    }

  })

  module.exports = SetIntervalElementContainer

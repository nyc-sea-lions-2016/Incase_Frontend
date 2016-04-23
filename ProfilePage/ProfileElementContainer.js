import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

class ProfileElementContainer extends Component {
  render() {
    return(
      <View style={profileElementStyles.container}>
        <Text style={profileElementStyles.elementHeader}>
        Element header:
        </Text>
        <Text>
        I am the text of an element.
        </Text>
      </View>
    )
  };
}

const profileElementStyles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    marginBottom: 20,
    borderBottomColor: "#bbbbbb",
    borderBottomWidth: 2,
    height: 50,
    width: 220,
  },

  elementHeader: {
    paddingTop: 5,
    marginBottom: 10,
    fontSize: 20,
  }
})

module.exports = ProfileElementContainer

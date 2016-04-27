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
        <Text style={profileElementStyles.elementText}>
        I am the text of an element.
        </Text>
      </View>
    )
  };
}

const profileElementStyles = StyleSheet.create({
  container: {
    marginBottom: 40,
    paddingBottom: 10,
    flex: 1,
    borderBottomColor: "#bbbbbb",
    borderBottomWidth: 1,
    borderTopColor: "#bbbbbb",
    borderTopWidth: 1,
    height: 75,
    width: 220,
  },

  elementHeader: {
    color: "#FFFFFF",
    alignSelf: "center",
    paddingTop: 5,
    marginBottom: 10,
    fontSize: 20,
  },

  elementText: {
    alignSelf: "center",
    color: "#FFFFFF",
  }

})

module.exports = ProfileElementContainer

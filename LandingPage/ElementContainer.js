import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  class ElementContainer extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View>
          <Text style={styles.box}>Im a god damn element</Text>
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      top: 30,
      // flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
      borderStyle: "solid",
      borderColor: "black",
      borderWidth: 1,
      marginBottom: 107.8,
      height: 50,
      width: 250,
    }
  })


module.exports = ElementContainer

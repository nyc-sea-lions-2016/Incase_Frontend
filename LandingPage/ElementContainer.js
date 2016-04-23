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
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      top: 30,
      backgroundColor: '#000000'
    }
  })


module.exports = ElementContainer

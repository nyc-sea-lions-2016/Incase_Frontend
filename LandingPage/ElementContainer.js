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
          <Text>Im a god damn element</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      top: 30,
    }
  })


module.exports = ElementContainer

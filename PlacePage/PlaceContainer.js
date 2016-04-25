import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import PlaceElement from '../PlacePage/PlaceElement'

  class PlaceContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={styles.container}>
          <PlaceElement/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      backgroundColor: '#2199e8',
    },
  });

  module.exports = PlaceContainer

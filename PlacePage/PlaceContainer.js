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
      <PlaceElement
      place={this.props.place}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'rgba(143, 185, 243,0.1)'
  },
});

module.exports = PlaceContainer

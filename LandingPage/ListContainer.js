import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ElementContainer from '../LandingPage/ElementContainer';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
    );
  }
}

  var styles = StyleSheet.create({
    container: {
      top: 20,
      backgroundColor: '#2199e8',
    }
  })


module.exports = ListContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

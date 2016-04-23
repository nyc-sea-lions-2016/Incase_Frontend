import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ItemContainer from '../LandingPage/ItemContainer';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View style={styles.container}>
      <ItemContainer/>
    </View>
    );
  }
}

  var styles = StyleSheet.create({
    container: {
      top: 25,
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      backgroundColor: '#2199e8',
    }
  })


module.exports = ListContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

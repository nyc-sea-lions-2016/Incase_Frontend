import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';

  import ElementContainer from '../LandingPage/ElementContainer';

  class ItemContainer extends Component {
    render(){
      return (
        <View >
          <ElementContainer/>
        </View>
      )
    }
  }



module.exports = ItemContainer

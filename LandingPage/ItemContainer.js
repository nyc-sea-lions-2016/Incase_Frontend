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
        <View style={itemStyles.container}>
          <ElementContainer/>
          <ElementContainer/>
          <ElementContainer/>
          <ElementContainer/>
          <ElementContainer/>
          <ElementContainer/>
          <ElementContainer/>
          <ElementContainer/>
          <ElementContainer/>
        </View>
      )
    }
  }

  const itemStyles = StyleSheet.create({
    container: {
      backgroundColor:'#8fb9f3',
    }
  })



module.exports = ItemContainer

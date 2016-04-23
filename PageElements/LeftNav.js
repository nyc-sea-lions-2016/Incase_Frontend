import React, {
  StyleSheet,
  Text,
  View,
  Component,
  Navigator,
  Touchablehighlight,
  AppRegistry
} from 'react-native'

class LeftNav extends Component {

  render(){
    return(
    <View style={styles.container}>
        <Text>Here's some text</Text>
    </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
  //Brian work yo magic
})

module.exports = LeftNav;

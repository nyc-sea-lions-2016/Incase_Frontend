import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
  } from 'react-native';

  class HoodElement extends Component {
    render() {
      return (
        <View>
          <View style={styles.mainContainer}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.textField}
          />
          </View>

          <View style={styles.mainContainer}>
          <Text style={styles.text}>Location</Text>
          <TextInput
            style={styles.textField}
          />
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      width:300,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20,
      flex:1,
    },
    textField: {
      height: 40,
      borderColor: '#f2f2f2',
      borderWidth: 1,
      backgroundColor: '#f2f2f2',
    },
    text:{
      fontSize: 16,
      color: '#fff'
    }
  })


module.exports = HoodElement

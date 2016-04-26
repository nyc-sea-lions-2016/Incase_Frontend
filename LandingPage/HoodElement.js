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
        <View style={styles.container}>
          <Text>Category | Business Type</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          />
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

    BoxTitleText:{
    fontWeight:'bold',
    color:'#fff',
    textAlign:'left',
    fontSize:20,
    marginBottom:10
    },

    BoxBodyText:{
    color:'#fff',
    fontSize:16
    }
  })


module.exports = HoodElement

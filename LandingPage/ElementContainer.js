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
        <View style={styles.mainContainer}>
          <View>
          <Text style={styles.BoxTitleText}>Time / Day</Text>
          </View>
          <View>
          <Text style={styles.BoxBodyText}>Information of the locations passed by This information is great.</Text>
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


module.exports = ElementContainer

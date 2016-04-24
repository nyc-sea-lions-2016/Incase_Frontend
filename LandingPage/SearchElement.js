import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  Image,
  View
  } from 'react-native';

  class SearchElement extends Component {
    render() {
      return (
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.NeighborhoodText}>Neighborhood</Text>
          </View>
          <View>
            <Text style={styles.TimeText}>Time</Text>
          </View>
        </View>

      )
    }
  }

  const styles = StyleSheet.create({


    NeighborhoodText:{
    fontWeight:'bold',
    color:'#fff',
    textAlign:'left',
    fontSize:20,
    marginBottom:30,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    },

    TimeText:{
      fontWeight:'bold',
      color:'#fff',
      textAlign:'left',
      fontSize:20,
      marginBottom:10,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      textAlign: 'center',
    }
  })


module.exports = SearchElement

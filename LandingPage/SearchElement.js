import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  TouchableHighlight,
  Image,
  View
  } from 'react-native';

import HoodIndex from './HoodIndex'

  class SearchElement extends Component {
    pressPage(){
      debugger;
      this.props.navigator.push({
        title: 'Neighborhood Search',
        component: <HoodIndex/>
      });
    }
    render() {
      return (
        <View style={styles.mainContainer}>
          <View>
            <TouchableHighlight
              onPress={this.pressPage.bind(this)}>
                <Text style={styles.NeighborhoodText}>Neighborhood</Text>
            </TouchableHighlight>
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

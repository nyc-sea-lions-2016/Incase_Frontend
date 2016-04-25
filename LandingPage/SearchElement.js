import React, {
  StyleSheet,
  AppRegistry,
  Component,
  TouchableHighlight,
  Text,
  TouchableHighlight,
  Image,
  View
  } from 'react-native';

import HoodIndex from './HoodIndex'

  class SearchElement extends Component {
    constructor(props){

      super(props);
    }
    pressHood(){
      this.props.navigator.push({
        title: 'Neighborhood Search',
        component: <HoodIndex/>
      })
    }
    pressTime(){
      this.props.navigator.push({
        title: 'Time Search',
        component: <ListContainer />
      })

    }
    render() {
      return (
        <View style={styles.mainContainer}>
          <TouchableHighlight
            onPress={this.pressHood.bind(this)}
          >
            <Text style={styles.NeighborhoodText}>Neighborhood</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.pressTime.bind(this)}
          >
            <Text style={styles.TimeText}>Time</Text>
          </TouchableHighlight>
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

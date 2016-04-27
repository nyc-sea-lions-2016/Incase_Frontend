import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  TouchableHighlight,
  Image,
  View
  } from 'react-native';

import HoodElement from './HoodElement'
import TimeElement from './TimeElement'

  class SearchElement extends Component {
    constructor(props){
      super(props);
    }

    pressHood(){
      this.props.navigator.push({
        title: 'Category Search',
        component: <HoodElement todayData={this.props.todayData} navigator={this.props.navigator}/>
      })
    }
    pressTime(){
      this.props.navigator.push({
        title: 'Time Search',
        component: <TimeElement/>
      })

    }
    render() {
      return (
        <View style={styles.mainContainer}>
          <TouchableHighlight onPress={this.pressHood.bind(this)}>
            <Text style={styles.NeighborhoodText}>Category</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.pressTime.bind(this)}>
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

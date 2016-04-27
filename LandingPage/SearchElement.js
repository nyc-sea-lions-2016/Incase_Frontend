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
        component: <TimeElement todayData={this.props.todayData} navigator={this.props.navigator}/>
      })

    }
    render() {
      return (
        <View style={styles.mainContainer}>

          <TouchableHighlight onPress={this.pressHood.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.NeighborhoodText}>Category</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.touchable}
          onPress={this.pressTime.bind(this)}
          >
            <View style={styles.button}>
              <Text style={styles.TimeText}>Time</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    NeighborhoodText:{
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    fontSize:20,
    marginBottom:30,
    padding: 10,
    borderRadius:10,
    },

    TimeText:{
      fontWeight:'bold',
      color:'#fff',
      fontSize:20,
      marginBottom:10,
      padding: 10,
      borderRadius:10,
      textAlign: 'center',
    },

    button: {
      height: 40,
      width: 200,
      borderRadius: 10,
      backgroundColor: '#35d37c',
      marginTop: 60,
    },

    touchable: {
      borderRadius: 10,
    }
  })


module.exports = SearchElement

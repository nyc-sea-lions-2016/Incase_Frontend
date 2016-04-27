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
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
          style={styles.button}
          onPress={this.pressHood.bind(this)}>
            <View>
              <Text style={styles.NeighborhoodText}>Category</Text>
            </View>
          </TouchableHighlight>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableHighlight
          style={styles.button}
          onPress={this.pressTime.bind(this)}
          >
            <View>
              <Text style={styles.TimeText}>Time</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      )
    }
  }

  var styles = StyleSheet.create({
    container: {
      paddingBottom: 80,
    },

    NeighborhoodText:{
    color:'#fff',
    textAlign:'center',
    fontSize:20,
    padding: 10,
    },

    TimeText:{
      color:'#fff',
      fontSize:20,
      padding: 10,
      textAlign: 'center',
    },

    buttonContainer: {
      marginTop: 100,
    },

    button: {
      height: 40,
      width: 200,
      borderRadius: 10,
      backgroundColor: '#35d37c',
    },

    touchable: {
      borderRadius: 10,
    }
  })


module.exports = SearchElement

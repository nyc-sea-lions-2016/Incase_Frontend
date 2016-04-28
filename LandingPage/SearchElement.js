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
import StartTimeElement from './StartTimeElement'

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
        title: 'Start Time Search',
        component: <StartTimeElement
          todayData={this.props.todayData}
          navigator={this.props.navigator}
          day={this.props.day}
          />
      })

    }
    render() {
      return (
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
          onPress={this.pressHood.bind(this)}
          style={styles.touchable}
          >
            <View style={styles.button}>
              <Text style={styles.text}>Category</Text>
            </View>
          </TouchableHighlight>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableHighlight
          onPress={this.pressTime.bind(this)}
          style={styles.touchable}
          >
            <View style={styles.button}>
              <Text style={styles.text}>Time</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      )
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    text:{
      color:'#fff',
      fontSize:20,
      textAlign: 'center',
    },

    buttonContainer: {
      marginTop:40,
      marginBottom:15,
    },

    button: {
      paddingTop: 8,
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

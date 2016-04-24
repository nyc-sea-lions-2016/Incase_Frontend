import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  class ElementContainer extends Component {

    componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      this.setState({places: nextProps})
    }

    render() {
      return (
        <View>

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

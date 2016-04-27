import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View,
  TouchableHighlight,
  Image
  } from 'react-native';

  class FavoriteButton extends Component {
    constructor(props){
      super(props);
    }
    render(){
      console.log('this.props.favorite =', this.props.favorite)
      if(this.props.favorite === false){
        return(
          <View>
            <TouchableHighlight>
              <Text>Click me to Favorite</Text>
            </TouchableHighlight>
          </View>
        )
      }else{
        return(
          <View>
              <Text>Now Come Visit!</Text>
          </View>
        )
      }
    }

  }

module.exports = FavoriteButton

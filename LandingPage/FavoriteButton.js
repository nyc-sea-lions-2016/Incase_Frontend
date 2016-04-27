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

    setNativeProps (nativeProps) {
      this._root.setNativeProps(nativeProps);
    }

    pressFavorite(){
      console.log("hit the favorite button")
      fetch('http://localhost:3000/places/'+this.props.id,{
          method: "PUT"
        }
      )
        .then((response) => response.json())
        .done();
    }

    render(){
      if(this.props.favorite === false){
        return(
          <View>
            <TouchableHighlight onPress={this.pressFavorite.bind(this)}>
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

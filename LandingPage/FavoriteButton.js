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
      fetch('http://localhost:3000/places/'+ this.props.id +"" ,{
          method: "PUT"
        }
      )
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
            <TouchableHighlight onPress={this.pressFavorite.bind(this)}>
              <Text>Remove from Favorites</Text>
            </TouchableHighlight>
          </View>
        )
      }
    }

  }

module.exports = FavoriteButton

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
      this.state = {
        fav: this.props.favorite
      }
    }

    setNativeProps (nativeProps) {
      this._root.setNativeProps(nativeProps);
    }

    componentWillReceiveProps(nextProps){
      this.setState({fav: nextProps})
    }

    pressFavorite(){
      fetch('http://boiling-refuge-94422.herokuapp.com/places/'+ this.props.id + "", {
          method: "PUT"
        }
      )
      this.setState({fav: !this.state.fav})
      // this.props.favoriteButtonClicked(!this.props.favorite)
    }

    // was this props.favorite
    render(){
      if(this.state.fav === false){
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

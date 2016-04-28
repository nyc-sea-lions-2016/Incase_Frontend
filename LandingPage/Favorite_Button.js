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

  // onPress={this.pressSearch.bind(this)}
  // onPressIn={this._onPressIn}
  // onPressOut={this._onPressOut}
  render(){
    if(this.props.favorite === false){
      return(
        <View style={styles.buttonContainer}>
        <TouchableHighlight
        style={styles.touchable}>
        <View style={styles.button}>
        <Text style={styles.welcome}> Save This Place </Text>
        </View>
        </TouchableHighlight>
        </View>
      )
    }else{
      return(
        <View styles={style.buttonContainer}>
        <View style={style.button}>
        <Text style={style.welcome}>Now Come Visit!</Text>
        </View>
        </View>
      )
    }
  }

}

const styles = StyleSheet.create({
  buttonContainer:{
    marginTop:40,
    marginBottom:15,
  },
  button: {
    backgroundColor: '#35d37c',
    height: 40,
    width: 200,
    borderRadius:10,
    justifyContent: 'center'
  },
  touchable: {
    borderRadius: 10
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
})

module.exports = FavoriteButton

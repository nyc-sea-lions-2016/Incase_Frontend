import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

  import FavoriteButton from '../LandingPage/FavoriteButton'

  class PlaceElement extends Component {
    constructor(props) {
      super(props);
      console.log("constructor state", props.place.favorite)
      this.state = {
        fav: props.place.favorite
      }
    }

    setNativeProps (nativeProps) {
      this._root.setNativeProps(nativeProps);
    }


    favoriteButtonClicked(favoriteState){
      console.log("fav button clicked", this.props.favorite)
      this.setState({
        fav: favoriteState
      })
    }



  render() {
    var website = 'No Website for This Location'
    if(this.props.place.website){
      website = this.props.place.website
    }
    if(this.props.place.categories != []){
      var catNodes = this.props.place.categories.map(function(category){
        return(
          <Text key={category.id} style={[placeStyle.mainChild, placeStyle.mainType]}> {category.category} </Text>
        )
      })
    }
    return (
      <View style={placeStyle.mainParent}>
      <Image
      style={placeStyle.placePicture}
      source={require('../images/user_icon.png')}
      />
      <TouchableHighlight onPress={this.favoriteButtonClicked.bind(this)}>
        <FavoriteButton favorite={this.state.fav} id={this.props.place.id} navigator={this.props.navigator} favoriteButtonClicked={this.favoriteButtonClicked.bind(this)}/>
      </TouchableHighlight>
        <View>
        <Text style={[placeStyle.mainChild, placeStyle.mainName]}>{this.props.place.name}</Text>
        </View>
        <View>
        <Text style={[placeStyle.mainChild, placeStyle.mainType]}>Type: {catNodes} </Text>
        </View>
        <View>
        <Text style={[placeStyle.mainChild, placeStyle.mainAddress]}>Address: {this.props.place.address}</Text>
        </View>
        <View>
        <Text style={[placeStyle.mainChild, placeStyle.mainPhone]}>Phone: 646-373-1738</Text>
        </View>
        <View>
        <Text style={[placeStyle.mainChild, placeStyle.mainEmail]}> Website: www.brianbier.co</Text>
        </View>
      </View>
    );
  }
}

const placeStyle = StyleSheet.create({
  mainParent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(143, 185, 243,0.1)'
  },
  placePicture: {
    paddingTop: 1,
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  mainName:{
    fontSize:20,
    margin:3,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: 'bold',

  },
  mainType:{
    fontSize:18,
    margin:3,
    flex: 3,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  mainChild:{
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  mainAddress:{
    fontSize: 18,
    margin:3,
    paddingBottom: 10,
  },
  mainPhone:{
    fontSize: 18,
    margin:3,
    paddingBottom: 10,
  },
  mainEmail:{
    fontSize: 18,
    margin:3,
    paddingBottom: 10,
  }
});

module.exports = PlaceElement

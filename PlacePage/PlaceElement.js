import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View,
  Image
} from 'react-native';

import FavoriteButton from '../LandingPage/Favorite_Button'

class PlaceElement extends Component {
  constructor(props) {
    super(props);
  }


  pressFavorite(){
    fetch('http://localhost:3000/places/'+this.props.id +'/edit')
    .then((response) => response.json())

    .done();
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
      <FavoriteButton onPress={this.pressFavorite} favorite={this.props.place.favorite}/>
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

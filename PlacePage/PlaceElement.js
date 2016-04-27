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
      this.state = {
        fav: ""
      }
    }

    setNativeProps (nativeProps) {
      this._root.setNativeProps(nativeProps);
    }

    favoriteButtonClicked(){
      console.log("hit the btutrgniorew")
      console.log(this)
      this.setState({
        fav: this.props.favorite
      })
    }

    render() {
      console.log("rerendering ")
      var website = 'No Website for This Location'
      if(this.props.place.website){
        website = this.props.place.website
      }

      if(this.props.place.categories != []){
        var catNodes = this.props.place.categories.map(function(category){
          return(
              <Text key={category.id} style={styles.mainCategory}> {category.category} </Text>
          )
        })
      }

      return (
        <View style={styles.container}>
          <Image
            style={styles.placePicture}
            source={require('../images/user_icon.png')}
          />
            <View style={styles.detailsContainer}>

            <TouchableHighlight onPress={this.favoriteButtonClicked.bind(this)}>
              <FavoriteButton favorite={this.props.place.favorite} id={this.props.place.id} navigator={this.props.navigator} favoriteButtonClicked={this.favoriteButtonClicked.bind(this)}/>
            </TouchableHighlight>

              <View style={styles.detailsContainer}>

              <Text style={styles.placeName}>{this.props.place.name}</Text>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.header}> Type: </Text>
              <Text style={styles.placeAddress}> {catNodes} </Text>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.header}> Address </Text>
              <Text style={styles.placeAddress}>{this.props.place.address}</Text>
            </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.header}> Phone  </Text>
                <Text style={styles.details}> phone number placehoder </Text>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.header}> Website </Text>
                <Text style={styles.details}> Website </Text>
              </View>

            </View>

        </View>
      );
    }
  }
// {this.props.place.phone}
  const styles = StyleSheet.create({
    detailsContainer:{
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 1,
    },
    placePicture: {
      paddingTop: 1,
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 15,
    },
    container:{
      paddingTop: 45,
      width: 300,
      height: 675,
      alignItems: "center",
      justifyContent: "center",

    },
    details: {
      alignSelf: "center",
      fontSize: 18,
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 15,
      color: "#FFFFFF",
      paddingBottom: 10,
      paddingLeft: 10,
      flex: 1,
    },
    placeName: {
      alignSelf: "center",
      fontSize: 30,
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 15,
      color: "#FFFFFF",
      paddingBottom: 10,
      paddingLeft: 10,
      flex: 1,
    },
    placeAddress: {
      alignSelf: "center",
      fontSize: 18,
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 15,
      color: "#FFFFFF",
      paddingBottom: 10,
      paddingLeft: 10,
      flex: 1,
    },
    header: {
      fontSize: 25,
      color: "#FFFFFF",
      alignSelf: "center",
      paddingTop: 5,
      marginBottom: 10,
    }
  });

  module.exports = PlaceElement

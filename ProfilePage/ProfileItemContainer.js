import React, {
  Image,
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

import ProfileListContainer from '../ProfilePage/ProfileListContainer'

class ProfileItemContainer extends Component {
  render() {
    return (
      <View style={profileItemStyles.container}>
        <Image
        style={profileItemStyles.profilePicture}
        source={require('../images/user_icon.png')}
        />
        <Text style={profileItemStyles.profilePictureHeader}>Pietro Martini</Text>
        <ProfileListContainer/>
      </View>
    )
  };
}

const profileItemStyles = StyleSheet.create({
  container: {
    paddingTop: 25,
    width: 300,
    height: 675,
    alignItems: "center",
  },

  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },

  profilePictureHeader: {
    fontSize: 25,
    marginBottom: 10,
    color: "#FFFFFF"
  }
})

module.exports = ProfileItemContainer

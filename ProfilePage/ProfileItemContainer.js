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
    backgroundColor: "orange",
    paddingTop: 25,
    width: 300,
    height: 600,
    alignItems: "center",
  },

  profilePicture: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

  profilePictureHeader: {
    marginBottom: 20,
  }
})

module.exports = ProfileItemContainer

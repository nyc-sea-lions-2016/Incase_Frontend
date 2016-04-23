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
        source={require('./')}

        <ProfileListContainer/>
      </View>
    )
  };
}

const profileItemStyles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  }

  // profilePicture: {
  //
  // }
})

module.exports = ProfileItemContainer

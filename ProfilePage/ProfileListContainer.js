import React, {
  AppRegistry,
  Component,
  StyleSheet,
  MapView,
  Text,
  View
} from 'react-native';

import ProfileElementContainer from '../ProfilePage/ProfileElementContainer';

class ProfileListContainer extends Component {
  render() {
    return (
      <View style={profileListStyles.container}>
        <ProfileElementContainer/>
        <ProfileElementContainer/>
        <ProfileElementContainer/>
      </View>
    )
  };
}

var profileListStyles = StyleSheet.create({
  container: {
    alignItems: "center",
  }
})

module.exports = ProfileListContainer

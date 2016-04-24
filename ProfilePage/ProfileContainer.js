import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import ProfileItemContainer from '../ProfilePage/ProfileItemContainer'

  class ProfileContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={profileContainerStyles.container}>
          <ProfileItemContainer/>
        </View>
      );
    }
  }

  var profileContainerStyles = StyleSheet.create({
    container: {
      paddingTop: 25,
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      backgroundColor: '#2199e8',
    }
  })

  module.exports = ProfileContainer

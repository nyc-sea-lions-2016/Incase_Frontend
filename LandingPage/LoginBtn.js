import React, {
  View,
  Component,
  AppRegistry,
  StyleSheet,
} from 'react-native';

import FBLogin from 'react-native-facebook-login'

class Login extends Component{
  render() {
    return (
      <FBLogin />
    );
  }
};

module.exports = Login

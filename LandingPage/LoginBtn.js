import React, {
  View,
  Component,
  AppRegistry,
  StyleSheet,
} from 'react-native';

import FBLogin from 'react-native-facebook-login';
import GraphRequest from 'react-native-fbsdk';
import GraphRequestManager from 'react-native-fbsdk';

class Login extends Component{
  _responseInfoCallback(error: ?Object, result: ?Object){
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      alert('Success fetching data: ' + result.toString());
    }
  }

  render() {
    return (
      <FBLogin
        onLogin={function(data){
          debugger;
          fetch('graph.facebook.com', {
            method: 'GET',
            body: JSON.stringify({
              token: "EAAGy8cRtCH0BAFWZAt49NsY7EGDEYXCnfFvKAqkGXwwIce6xlgeFiWGR3xJiI6J2zwR8Eh4IVcS8Q7Da11jwS0iOZB9b9odePeskfD1kUZAkg9648kquuoyMmyYXHljMIE95RZBoWdTznCNRoK4SAAz1WegKGeqJZC4yQssKwzSs9hSOGYjG8CmoLX2au4BIZD",
              userId: data['credentials']['userId'],
              fields: 'id,name'
            })
          }).then((response) => response.json())
            .then((responseData) => {console.log(responseData)})
            .done();

        }}
      />
    );
  }
};

module.exports = Login

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  MapView,
  NavigatorIOS,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import TabBarNavigator from 'react-native-tabbar-navigator'
import ProfileContainer from '../ProfilePage/ProfileContainer';
import ListContainer from '../LandingPage/ListContainer';
import MapContainer from '../Maps/MapContainer';
import TabBarNavigator from 'react-native-tabbar-navigator';
import SearchContainer from '../LandingPage/SearchContainer'
import HoodIndex from '../LandingPage/HoodIndex'

var BackgroundGeolocation = require('react-native-background-geolocation');
const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

class InCaseFrontend extends Component {
  constructor() {
    super();
    this.state = {message: ''}
    BackgroundGeolocation.configure({
          desiredAccuracy: 0,
          stationaryRadius: 50,
          distanceFilter: 50,
          disableElasticity: false, // <-- [iOS] Default is 'false'.  Set true to disable speed-based distanceFilter elasticity
          locationUpdateInterval: 5000,
          minimumActivityRecognitionConfidence: 80,   // 0-100%.  Minimum activity-confidence for a state-change
          fastestLocationUpdateInterval: 5000,
          activityRecognitionInterval: 10000,
          stopDetectionDelay: 1,  // <--  minutes to delay after motion stops before engaging stop-detection system
          stopTimeout: 2, // 2 minutes

          // HTTP / SQLite config
    /*
          url: 'http://posttestserver.com/post.php?dir=cordova-background-geolocation',
          batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
          autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
          maxDaysToPersist: 1,    // <-- Maximum days to persist a location in plugin's SQLite database when HTTP fails
          headers: {
            "X-FOO": "bar"
          },
          params: {
            "auth_token": "maybe_your_server_authenticates_via_token_YES?"
          }
    */
        });

// This handler fires whenever bgGeo receives a location update.
BackgroundGeolocation.on('location', function(location) {
  this.setState({message: JSON.stringify(location)});
  console.log('- [js]location: ', JSON.stringify(location));
}.bind(this));

// This handler fires whenever bgGeo receives an error
BackgroundGeolocation.on('error', function(error) {
  var type = error.type;
  var code = error.code;
  alert(type + " Error: " + code);
});

// This handler fires when movement states changes (stationary->moving; moving->stationary)
BackgroundGeolocation.on('motionchange', function(location) {
    this.setState({message: JSON.stringify(location)});
    console.log('- [js]motionchanged: ', JSON.stringify(location));
}.bind(this));

BackgroundGeolocation.start(function() {
  console.log('- [js] BackgroundGeolocation started successfully');

  // Fetch current position
  BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
    console.log('- [js] BackgroundGeolocation received current position: ', JSON.stringify(location));
  }, function(error) {
    alert("Location error: " + error);
  });

  });
}

  render() {
    return (
      <TabBarNavigator>
        <TabBarNavigator.Item title='ICYMI' defaultTab>
          <MapContainer />
        </TabBarNavigator.Item>

        <TabBarNavigator.Item title='Today'>
          <ListContainer places={this.state.today}/>
        </TabBarNavigator.Item>

        <TabBarNavigator.Item title='Yesterday'>
          <ListContainer place={this.state.yesterday}/>
        </TabBarNavigator.Item>

        <TabBarNavigator.Item title='Two Days'>
          <ListContainer place={this.state.twodays}/>
        </TabBarNavigator.Item>

        <TabBarNavigator.Item title='Search'>
          <SearchContainer />
        </TabBarNavigator.Item>

      </TabBarNavigator>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: "stretch",
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PageContainer', () => PageContainer);
module.exports = InCaseFrontend

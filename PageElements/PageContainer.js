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


import SearchListContainer from '../SearchListPage/SearchListContainer';
import FavoriteContainer from '../LandingPage/FavoriteContainer';
import SetIntervalContainer from '../SetIntervalPage/SetIntervalContainer';
import ProfileContainer from '../ProfilePage/ProfileContainer';
import TodayContainer from '../LandingPage/TodayContainer';
import YesterdayContainer from '../LandingPage/YesterdayContainer';
import TwoDaysContainer from '../LandingPage/TwoDaysContainer';
import MapContainer from '../Maps/MapContainer';
import TabBarNavigator from 'react-native-tabbar-navigator';
import SearchContainer from '../LandingPage/SearchContainer'
import PlaceContainer from '../PlacePage/PlaceContainer'


var BackgroundGeolocation = require('react-native-background-geolocation');


var new_location = BackgroundGeolocation

class InCaseFrontend extends Component {
  constructor() {
      super();
      this.state = {
        message: '',
        favPlaces: [],
        today: [],
        yesterday: [],
        twoDays: []
      }


      BackgroundGeolocation.configure({
            desiredAccuracy: 0,
            stationaryRadius: 5,
            distanceFilter: 30,
            disableElasticity: false, // <-- [iOS] Default is 'false'.  Set true to disable speed-based distanceFilter elasticity
            locationUpdateInterval: 5000,
            minimumActivityRecognitionConfidence: 80,   // 0-100%.  Minimum activity-confidence for a state-change
            fastestLocationUpdateInterval: 5000,
            activityRecognitionInterval: 10000,
            stopDetectionDelay: 1,  // <--  minutes to delay after motion stops before engaging stop-detection system
            stopTimeout: 2, // 2 minutes
            debug: true,
            function(state){
              if(!state.enabled){
                bgGeo.start();
              }
            }
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
    //console.log('- [js]location: ', JSON.stringify(location));
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
      //console.log('- [js]motionchanged: ', JSON.stringify(location));
      var latlong = location
//'http://localhost:3000/places'

      fetch('https://boiling-refuge-94422.herokuapp.com/places', {
        method: 'POST',
        body: JSON.stringify({
          latlong: location
        })
      })
    .then(function(response) {

      //console.log('request succeeded with json response', response)
    }).catch(function(error) {
      //console.log('request failed', error)
    })

  }.bind(this));

  BackgroundGeolocation.start(function() {
    //console.log('- [js] BackgroundGeolocation started successfully');

    // Fetch current position
    BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
      // console.log('- [js] BackgroundGeolocation received current position: ', JSON.stringify(location));
      // var latlong = location;
//'http://localhost:3000/places'

      fetch('https://boiling-refuge-94422.herokuapp.com/places', {
        method: 'POST',
        body: JSON.stringify({
          latlong: location
        }),

      }).then((responseText) => {
  //console.log(responseText);
  })
    }, function(error) {
      alert("Location error: " + error);
          });
         });
  }


  //

  render() {
      return (
        <TabBarNavigator>
          <TabBarNavigator.Item title='ICYMI' defaultTab>
            <MapContainer />
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Today'>
            <TodayContainer places={this.state.today} title="today" navigator={navigator}/>
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Yesterday'>
            <YesterdayContainer places={this.state.yesterday} title="yesterday" navigator={navigator}/>
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Two Days'>
            <TwoDaysContainer places={this.state.twoDays} title="2days" navigator={navigator}/>
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Favorites'>
            <FavoriteContainer />
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

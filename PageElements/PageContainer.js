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




import SetIntervalContainer from '../SetIntervalPage/SetIntervalContainer';
import ProfileContainer from '../ProfilePage/ProfileContainer';
import ListContainer from '../LandingPage/ListContainer';
import MapContainer from '../Maps/MapContainer';
import TabBarNavigator from 'react-native-tabbar-navigator';
import SearchContainer from '../LandingPage/SearchContainer'


var BackgroundGeolocation = require('react-native-background-geolocation');


TODAY_API_URL = 'http://localhost:3000/places/today'
YESTERDAY_API_URL = 'http://localhost:3000/places/yesterday'
TWO_DAYS_API_URL = 'http://localhost:3000/places/two_days'

var new_location = BackgroundGeolocation



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
      var latlong = location
      fetch('http://localhost:3000/latlongs', {
        method: 'POST',
        body: JSON.stringify({
          loc: latlong,
          word: "ioehoihfewresponse"
        })
      })
    .then(latlong)
    .then(function(response) {
      console.log('request succeeded with json response', response)
    }).catch(function(error) {
      console.log('request failed', error)
    })

  }.bind(this));

  BackgroundGeolocation.start(function() {
    console.log('- [js] BackgroundGeolocation started successfully');

    // Fetch current position
    BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
      // console.log('- [js] BackgroundGeolocation received current position: ', JSON.stringify(location));
      // var latlong = location;
      fetch('http://localhost:3000/latlongs', {
        method: 'POST',
        body: JSON.stringify({
          latlong: location
        }),

      }).then((responseText) => {
  console.log(responseText);
  })
    }, function(error) {
      alert("Location error: " + error);
      });
        });
  }

  componentWillMount() {
    this.fetchTodayData();
    this.fetchYesterdayData();
    this.fetchTwoDaysData();
  }

  fetchTodayData() {
    fetch(TODAY_API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        today: responseData,
      });
    })
    .done();
  }

  fetchYesterdayData() {
    fetch(YESTERDAY_API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        yesterday: responseData,
      });
    })
    .done();
  }

  fetchTwoDaysData() {
    fetch(TWO_DAYS_API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        twoDays: responseData,
      });
    })
    .done();
  }




  render() {
    return (
      <TabBarNavigator>
        <TabBarNavigator.Item title='ICYMI' defaultTab>
          <MapContainer />
        </TabBarNavigator.Item>

        <TabBarNavigator.Item title='Today'>
          <ListContainer places={this.state.today} title="today"/>
        </TabBarNavigator.Item>

        <TabBarNavigator.Item title='Yesterday'>
          <ListContainer places={this.state.yesterday} title="yesterday"/>
        </TabBarNavigator.Item>

        <TabBarNavigator.Item title='Two Days'>
          <ListContainer places={this.state.twoDays} title="2days"/>
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

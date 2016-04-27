import React, {
  AppRegistry,
  Component,
  StyleSheet,
  MapView,
  NavigatorIOS,
  TabBarIOS,
  Text,
  Image,
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

const menuIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAACTpAAAk6QFQJOf4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8YBMDAAAABB0Uk5TAAIbOj9CWHCSk6iv0OLr+siXxmsAAAB3SURBVFjD7ZdBEoAgDAOjqIAK9P+v9Q8sBw/ZOxkGmk4imQWkek9Tk5QDkfUygVcBsUCEOjvfVZhA0V7AHXrZbWXzF7bzmubcpKMRL7VDD3Pjo8EEhpdqBH9E/I14kPAoG/MPcMDAEQeHLC/VBQK4cODKg0uX4XzbbX55M39OswAAAABJRU5ErkJggg==';
const calendarImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAADjkAAA45AHsVibFAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAadQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIAAAIAAAHAAAHAAAHAAAGAAAGBgAGBQAFBQAFBQAFBQAFBQAFBAAEBAAEBAAEBAAEBAAEBAAEBAAEBAAEBAAEBAAEBAAEBAAEAwADAwADAwADAwADAwADAwADAwADAwADAwADAwADAwADAwAFAgAFAgAFAgAFAgAFAgAEAgAEAgAEAgAEAgAEBAIEBAIEBAIEBAIEBAIEBAIEBAIEBAIEBAIEAwIDAwIDAwIDAwIDAwIDAwIDAwIDAwIDAwIDAwIFAwIFAwIFAwIFAwIFAwIFAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAgEEAgEEAgEEBAEEBAEEAwEDAwEFAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEE7KCv4wAAAIx0Uk5TAAECAwQFBgcICQoLDQ4PEBITFBUWGBkaHB8gISIjJCYoKi4vMDE1Nzk6Oz4/QEFCREVHSEpNTk9QUVJZWlteYWlucHF0eHt+f4CBgoOFhoiJkZOUlZeYmZucnaChoqOmqa+wsrO0tba3uLu8vb7HycrMzc/Q2Nnd4uPl6Onr7O3u8fP09fb4+fv8/f6+bMyNAAACeElEQVRYw+3W/VcMURzH8XdSG8km2QoptZ4SIQ8JaUNPKykqSWKX0ipCm7A9idTu94/2w8zszDYztXf3B52Oz09z53u/rzPnzJ07F6zxRdZFYh24pCMmsh7x4Z4eERFJVDhXKxIiItKzBTAoIiLid676tergDgQKvVpyTKDAa4vHBHL0W4UAVL2NawU5aAJdYssDEzii34q/qQLGklO8qoDIGLCaDbAKrGUDrO0+YEC7qHUGarWLgS2AZhERmfc4A555ERFpdgV8UNfe2dlaBo/tQDeUtXZ1tdfBURfgurm6p+3AhFltcgFm8owZDXE7sFFvVD2fXAB5VwlATsuiOGThjtZ/IiJugMSj4VBoeklcsjgVCoWj1qfbDCjnP7CDgKA3owSTgJ+M4t+VQNUFPeUA1BjDEoASY1TjDgwar6cNgElj2JSyjUz+Q2AhkQ1w9eEBiq/1/coY0FP+YiI7AEozBvJrjlmhFlWgMioSuZGbBMJ2oH1Wj7aDPzWGFwF4JSIiXxv0yYfXFJfy/g3tcRJ9+wB4KYrAueQ2Ej0P3BJVoM2yE80F34syML75V/fFDjT16qkD4K4xPAnkr6b2f64YUXuNgdT+0QIUgEYoXra2rwdAARgChq39sXpUgLE9cN/aP6NtWOkC4b1wO2HpH/KgAkx5oOGP2f6t0ZidHvChEGpXzP7hIpSAWS8c/55sn79iWVkjaSykR6VwJpbsf1bE1oBTbv5OfgCXUyvpAfeMQ9lyWx7qQG6/sfT6D9mKo9sDPuPIO17tUDW/xrMu/Zd+aO1LgWp7TgX1/eCnyFyvY57Htz3irACvszkjPQFOxzLtjn/sLuUvPcrCUot1SioAAAAASUVORK5CYII=';
const favoriteImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABzwAAAc8B4QwQxwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAR6SURBVHic5ZtdiBZVGMd//3d3NcUtl9pc05I+CNtNxJAtlU0iEalgu4goISiKMpIiiOoiiG6CrqL7AoOCwqCLoIvwZqNuugiLtKhNSvqAtA8tV0vp6eLMq6/vzvtxzsw5M+kfHvZlZp7n/J//PuecmTNnZGaczxisqmFJE8B24Edgl5nNVcGjEgEkXQN8BCzNDm0F7qyCS6OKRoHnOJM8wLSkzVUQSS6ApBHg7pxTj6fmAtVUwP3Aopzj05JWJeaSVgBJAnZ0OD0APJaQDgBKOQ1KuhXY0+WS34GVKWeE1F3g0R7nR4D7UhBpIlkFSFoOHKT31LvfzCYSUALSVsBD9HffMS5pS2wyTSQRQNIA8LCHS7IpMVUF3AGs9Lj+dklXxyLTilQC9Br82tEAdsYg0o7og6Ckq4BZQJ6uR4EVZvZX+azOIEUFPIJ/8gAX4u4aoyJqBUhaCPwAXBIY4mtgtUUkGbsC7iI8eYBrgW0lcclFbAF8B788PFFCjI6I1gUkrQE+LyGUAeNm9lUJseYhSgVIGgReKSsc8Lqk4ZLinR28SAVIWgAsA8Za/l6OW/BYXQbBFswBM8AvwK+Z/dby+7SZ2fF+g84TILttHcUl05pY++8x3NNbHXGcHGFa7DCwx8x+Fi6JZ3Gj7Rhu1K5qrTAlTuFWpdmNG2jOR/umAUwVVPL/DGsAH1fNoiIYbnmeZcBeqi/HlPY3sN3MIJsFlgDv1YBYCvsDuMXMOC1AJkIDeLkGBGPaQWCimfNZArQIsQM4WQOyZdte4LJ5+bYfyETYmpVK1aTLsg+A4dxc8w5mIowDB2pAvqjtAoY65tnpRCbCKG6arDqJUHuhW349BchEWAi8WYNkfOwk8GCv3PoSoEWI52uQWD/2J7Ct77z6vTAT4V7gRA2S7GQ/Aeu8cvK5OBNhI+6ZvOpk220/sMo7H1+HTIQrgX01SLppM8BISC7BK0KSLsLNEMne5HbAt8BaMzsW4hy88GFmR4CnQ/1LxNuhyUPxlZ/DBf3LwOIizkUFuL6gfxnYVMS5qAAbC/qXgXWSloQ6FxVgQ0H/MjBIgX9EsACSlgLXhfqXjM2hjkUq4CbCXnvHwM2hjkUEqEP/b2JS0gUhjueKAAtwFemNIAEkNYDJEN+ICOoGoRWwBojytrYAkgpQp/JvYoOkIV+nUAHKmP8/Be4BbgRexL3+LoLFwHpvr8DH4VnCH12P4ra9DLTFvAJ4p0BcA56Jvh4AXFqA4G7c3r9u8bcAXwbGfz+FANMBxA4At3m0MQQ8lVWLTztH2isrhgAveRD6B9e/FwV2teXAG54i3BBbgA/7JDKD293l3UZOm1PAZ322+2Q0AbLSnOtB4BDwANn+o7IM903RTtxnNd3afzemAOu7NPwv8BpwcZmJ53AYBV7N2svj8V1MATZ1aPQLYCpm4jlcJoFPcrjsiynAMG4Dc7OxY7gdZh1fPkYWoYH7FOdQxucEHrONWcCyuKQVuG3sp4C3zOx7rwARkO1MXQvMmlut7t/XV4BzDf8BNoHfTsn4IaAAAAAASUVORK5CYII=';
const worldImg = 'data:image/png;base64,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';
const timeImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAARaAAAEWgH0YgQkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAZhQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmvKmKwAAAId0Uk5TAAECBAUGBwgJCg0ODxARFBUWFxgZGhsfICMlJygwMjY4OkBDRUdJTlJTVVhaXmNmZ2prbG1vcnZ/gIKDhIWGh4iLjI+QkZOUmpydnqChoqOkpqerrK2vsLGytLi8wMHCxMXGx8jKy9HS1NfY2tvd4OHi4+Xm6Ons7e/w8fL09fb3+Pn6+/z+fEtFfAAAAtxJREFUWMPtluk/VGEYhp9hjCJLyhJJsiWSZMsaJYZklxAZZN8ZkwnNMK5/uw/MvOfMzJkzxof8+nV/Ovf7Puc62/Oe+xUJUs320F3lChYXCzSTLza+PpTISvfAK2WnYEo56wG0mQCeAh+U3YIt5R4AX8Jc9JlGr4FRZQ/gQLnnwHdtdbqISJWHmOWpEpF1bqB1ETm6CeDoEuB6F9Bn4IeybnAr9xFYV9YVAKzF9hXWwgEyfVCn7AzMKGf7Ce9NANL225GiXMneXolm8s2v5UdmALmja5L4eDGcNABEr9sEOP0Wk04DgBt34t8H/AOf8T/g9gLiCht7p5aXp3obC+NiAOTbnapjnfb8awJyBi70TX8xkHMdQK3Xf+Lxsf/IWxs1wNoDwOlEVV6SSFJe1cQpAD3W6AAJ0wCejlQ1lNrhAZhOiArQCzCfrb9a9jxAbzSAOoBB26WxFBdbrlJpEHShZQTIPQf6/a4Zmv3H/cB5rilgBJiz+d0qrAaScQ4YMQMUACdZ4dM56wQoMAEMAy1G8d4CDEcGWN1wlGwESD4CtzUioBgYEiOADAHFEQGdQIUxoALojAgYBTKNAZnAaESAA3xxxoA4HzgiArZhX4wBsg/bYQDuT355YTcI4Lqn8bvgDRS7w4frmUVzwgKwoAiWszDhuhScuOkawEt0hPTg2iURKT8MGizTPsNbHaEsqPSwXEQk8bFSHWCXEMLklbEDdZryxJD/ZLIXnLZQwuXysjnBmxw5LCaBegkmbFy+2HrNzRipFHCl6Mee1NwXEZEUF1BqllezwLgl3IxlHJg1DbxCH9AebqYd8BWaR2Y1QGvIPVhaAaqjCd0mgLEk/WDSGEBTdLFtB3DWaHLIWuMkpEOMFT8JwE5XUaKISGJR1w4Ak/HR7hxsDf4V5lpZcfnXTYPtGpuPtO5zfdefd6ddc/+SN6HZIVxM5MWwBcqo7HNsHh9vOvoqM4yr/gBmjLnrPQ6ZoAAAAABJRU5ErkJggg==';
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
            locationUpdateInterval: 25000,
            minimumActivityRecognitionConfidence: 80,   // 0-100%.  Minimum activity-confidence for a state-change
            fastestLocationUpdateInterval: 25000,
            activityRecognitionInterval: 10000,
            stopDetectionDelay: 1,  // <--  minutes to delay after motion stops before engaging stop-detection system
            stopTimeout: 2, // 2 minutes
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

      fetch('http://localhost:3000/places', {
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

      fetch('http://localhost:3000/places', {
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
          <TabBarNavigator.Item title='ICYMI' icon={{uri: worldImg, scale:2}} defaultTab >
            <MapContainer />
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Today' icon={{uri: menuIcon, scale:2}}>
            <TodayContainer places={this.state.today} title="today" navigator={navigator}/>
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Yesterday' icon={{uri:calendarImg, scale:2}}>
            <YesterdayContainer places={this.state.yesterday} title="yesterday" navigator={navigator}/>
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Two Days' icon={{uri:timeImg, scale:2}}>
            <TwoDaysContainer places={this.state.twoDays} title="2days" navigator={navigator}/>
          </TabBarNavigator.Item>

          <TabBarNavigator.Item title='Favorites' icon={{uri: favoriteImg, scale:2} }>

            <FavoriteContainer places={this.state.favorites} navigator={navigator}/>
          </TabBarNavigator.Item>
        </TabBarNavigator>
      );
    }
  }

const styles = StyleSheet.create({
  tabItem: {
    color: 'red',
    fontSize: 20
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

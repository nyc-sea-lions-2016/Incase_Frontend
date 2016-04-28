import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';
// import Tabs from '../PageElements/Tabs'

class MapContainer extends Component{
  constructor(){
    super();
    this.state = {currentRegion:{
          longitude: 0,
          latitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }
        }
    }
  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({currentRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }});
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
        this.setState({currentRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }});

      })
    }

      // latitude: this.state.latitude,
      // longitude: this.state.longitude,
      // latitudeDelta: 0.0922,
      // longitudeDelta: 0.0421,
  render(){
    return(
        <MapView
          showsUserLocation={true}
          followUserLocation={true}
          style={styles.map}
          initialRegion={this.state.currentRegion}
          />
    );
  }
};


const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: 150,
  },
});

module.exports = MapContainer

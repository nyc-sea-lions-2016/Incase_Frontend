import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

class MapContainer extends Component{

  render(){
    return(
      <MapView style= {styles.map}
        initialRegion={{
          latitude: 40.7064170,
          longitude: -74.0090820,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
};


const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 250,
    width: 250,
    flex: 1,
  },
});

module.exports = MapContainer

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

  render(){
    return(
        <MapView
          style={styles.map}
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
    flex: 1,
    height: 150,
  },
});

module.exports = MapContainer

import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View,
  Image
  } from 'react-native';

  class PlaceElement extends Component {
    constructor(props) {
      super(props);
}

    render() {
      return (
        <View style={styles.container}>
          <Image
            style={styles.placePicture}
            source={require('../images/user_icon.png')}
          />
            <View style={styles.detailsContainer}>
              <View style={styles.detailsContainer}>
              <Text style={styles.placeName}> Sample Place Name </Text>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.header}> Address </Text>
                <Text style={styles.placeAddress}> 123 Main Street, New York, NY 19283 </Text>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.header}> Phone  </Text>
                <Text style={styles.details}> 123-456-789 </Text>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.header}> Website </Text>
                <Text style={styles.details}> www.example.com </Text>
              </View>
            </View>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    detailsContainer:{
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 1,
    },
    placePicture: {
      paddingTop: 1,
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 15,
    },
    container:{
      paddingTop: 45,
      width: 300,
      height: 675,
      alignItems: "center",
      justifyContent: "center",

    },
    details: {
      alignSelf: "center",
      fontSize: 18,
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 15,
      color: "#FFFFFF",
      paddingBottom: 10,
      paddingLeft: 10,
      flex: 1,
    },
    placeName: {
      alignSelf: "center",
      fontSize: 30,
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 15,
      color: "#FFFFFF",
      paddingBottom: 10,
      paddingLeft: 10,
      flex: 1,
    },
    placeAddress: {
      alignSelf: "center",
      fontSize: 18,
      borderBottomColor: "#bbbbbb",
      borderBottomWidth: 1,
      borderTopColor: "#bbbbbb",
      borderTopWidth: 15,
      color: "#FFFFFF",
      paddingBottom: 10,
      paddingLeft: 10,
      flex: 1,
    },
    header: {
      fontSize: 25,
      color: "#FFFFFF",
      alignSelf: "center",
      paddingTop: 5,
      marginBottom: 10,
    }
  });

  module.exports = PlaceElement

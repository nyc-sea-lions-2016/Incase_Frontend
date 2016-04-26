import React, {
  Image,
  DatePickerIOS,
  StyleSheet,
  TouchableHighlight,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import SearchListContainer from '../SearchListPage/SearchListContainer'

  class SetIntervalElementContainer extends Component {
    render() {
      return (
        <View style={setElementStyles.container}>
          <View style={setElementStyles.elementArea}>
            <Text style={setElementStyles.header}>
              Start Time
            </Text>
            <DatePickerIOS onDateChange={this.props.startDateChanged}
             date={this.props.startDate} />
          </View>


          <View style={setElementStyles.elementArea}>
            <Text style={setElementStyles.header}>
              End Time
            </Text>
            <DatePickerIOS onDateChange={this.props.endDateChanged}
             date={this.props.endDate}  />
          </View>

          <View>
            <TouchableHighlight style={setElementStyles.button}
            onPress={this.props.onPressButton}>
            <Text>GO</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    };
  }

  const setElementStyles = StyleSheet.create({
    elementArea: {
      paddingTop: 10,
      width: 325,
      marginBottom: 50,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#FFFFFF",

    },

    header: {
      alignSelf: "center",
      color: "#FFFFFF",
      fontSize: 32,
    },

    button: {
      backgroundColor: "#35d37c",
      paddingTop: 4,
      alignSelf: "center",
      alignItems: "center",
      marginTop: 20,
      width: 200,
      height: 25,
      bottom: 50,
      borderColor: "#FFFFFF"
    },

  })

  module.exports = SetIntervalElementContainer

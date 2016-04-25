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
      console.log('siec props', this.props);
      return (
        <View style={setElementStyles.container}>
          <View style={setElementStyles.elementArea}>
            <Text style={setElementStyles.header}>
              Start Time:
            </Text>
            <DatePickerIOS onDateChange={this.props.startDateChanged}
             date={this.props.startDate} />
          </View>


          <View style={setElementStyles.elementArea}>
            <Text style={setElementStyles.header}>
              End Time:
            </Text>
            <DatePickerIOS onDateChange={this.props.endDateChanged}
             date={this.props.endDate}  />
          </View>

          <View>
            <TouchableHighlight style={setElementStyles.button}
            onPress={this.props.onPressButton}>
            <Text>Go</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    };
  }

  const setElementStyles = StyleSheet.create({
    container: {
      backgroundColor: "orange",
    },

    elementArea: {
      width: 240,
      backgroundColor: "green",
      marginBottom: 100,

    },

    header: {
      alignSelf: "center",
      color: "#FFFFFF",
      fontSize: 32,
    },

    button: {
      width: 200,
      height: 20,
      backgroundColor: "yellow",
      bottom: 50,
    }

  })

  module.exports = SetIntervalElementContainer

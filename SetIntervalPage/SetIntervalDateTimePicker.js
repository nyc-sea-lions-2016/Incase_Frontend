import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  TextInput,
  Component,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

class TextInputDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      datePickerMode: 'hidden',
    }
  }

  toggleDatePicker() {
    var mode = this.state.datePickerMode == 'hidden' ? 'visible' : 'hidden';
    this.setState( { datePickerMode: mode } );
  }

  onDateChange( date ) {
    this.setState( { date: date } );
  }

  render() {
    var datePicker = (
      <View style={ dateStyles.datePicker }>
        <TouchableOpacity onPress={
          this.toggleDatePicker.bind(this) } style={{ padding: 5, alignItems: 'flex-end' }}>
          <Text>Done</Text>
          </TouchableOpacity>

          <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          onDateChange={this.onDateChange.bind(this) }
          />
          </View>
        );

        return (
          <View style={dateStyles.container}>

          <View style={{ padding: 20, marginTop: 100 }}>

          <Text>Date</Text>
          <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
          <View style={ dateStyles.input }>
          <Text>{this.state.date.getMonth()}/{
            this.state.date.getDate() }/{
              this.state.date.getFullYear() }
          </Text>
          </View>
          </TouchableWithoutFeedback>
          </View>
          { this.state.datePickerMode == 'visible' ? datePicker : <View/> }
          </View>
        )
      }
    }

          var dateStyles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#F5FCFF',
            },

            input: {
              height: 40,
              justifyContent: 'center',
              padding: 5,
              borderColor: 'gray',
              borderWidth: 1,
              marginVertical: 10,
            },

            datePicker: {
              borderTopWidth: 1,
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              height: 220,
              borderColor: '#CCC',
              backgroundColor: '#FFF',
            },

          });

module.exports = TextInputDatePicker
AppRegistry.registerComponent('TextInputDatePicker', () => TextInputDatePicker);

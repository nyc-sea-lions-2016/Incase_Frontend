import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  TextInput,
  DatePickerIOS,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View
  } from 'react-native';

  class TimeElement extends Component {
    constructor(props){
        super(props);

        this.state = {
          inputtedTime: new Date(),
          date: new Date(),
          datePickerMode: 'hidden',
        }
      }
      toggleDatePicker(){
        var mode = this.state.datePickerMode == 'hidden' ? 'visible' : 'hidden';
        this.setState( { datePickerMode: mode } );
      }
      onDateChange( date ){
        this.setState( { date: date } );
      }

      sortTime() {

      }

      render() {

        var datePicker = (
          <View style={ styles.datePicker }>

            <TouchableOpacity onPress={ this.toggleDatePicker.bind(this) } style={{ padding: 5, alignItems: 'flex-end' }}>
              <Text>Done</Text>
            </TouchableOpacity>

              <DatePickerIOS
              date={this.state.date}
              mode="datetime"
              onDateChange={ this.onDateChange.bind(this) }
            />
          </View>
        );

        return (
          <View style={styles.container}>

            <View style={{ padding: 20, marginTop: 100 }}>
              <Text>Start Date</Text>
              <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
                <View style={ styles.input }>
                  <Text>{ this.state.date.getMonth() }/{ this.state.date.getDate() }/{ this.state.date.getFullYear() }</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View style={{ padding: 20, marginTop: 100 }}>
              <Text>End Date</Text>
              <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
                <View style={ styles.input }>
                  <Text>{ this.state.date.getMonth() }/{ this.state.date.getDate() }/{ this.state.date.getFullYear() }</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

            { this.state.datePickerMode == 'visible' ? datePicker : <View/> }
          </View>
        );
      }
  }

  const styles = StyleSheet.create({
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
       height: 220,
       borderColor: '#CCC',
       backgroundColor: '#FFF',
     },
  })


module.exports = TimeElement

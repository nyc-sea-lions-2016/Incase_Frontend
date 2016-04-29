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

import EndTimeElement from './EndTimeElement'

class StartTimeElement extends Component {
    constructor(props){
        super(props);
        this.state = {
          date: new Date(),
        }
        console.ignoredYellowBox = [
          'Warning: Failed propType',
          // Other warnings you don't want like 'jsSchedulingOverhead',
        ];
      }
      pressStartDate(){
        this.props.navigator.push({
          title: 'End Time Search',
          component: <EndTimeElement
              startTime={this.state.date}
              todayData={this.props.todayData}
              day={this.props.day}
          />
        })
      }

      dateChange( date ){
        this.setState( { date: date } );
      }



      render() {
        return (
          <View style={styles.container}>
            <View style={{ padding: 20}}>
              <Text style={styles.header}>Start Time</Text>
            </View>
            <View style={ styles.datePicker }>

              <TouchableOpacity onPress={ this.pressStartDate.bind(this) } style={{ padding: 5, alignItems: 'flex-end' }}>
                <Text>Done</Text>
              </TouchableOpacity>

                <DatePickerIOS
                date={this.state.date}
                mode="time"
                onDateChange={ this.dateChange.bind(this) }
              />
            </View>
          </View>
          )
      }
}

  const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'rgba(143, 185, 243,0.1)',
       alignItems: "center",
     },

     header: {
       fontSize: 28,
       marginBottom: 20,
     },

     datePicker: {
       borderTopWidth: 1,
       height: 220,
       borderColor: '#CCC',
       backgroundColor: '#FFF',
     },
  })


module.exports = StartTimeElement

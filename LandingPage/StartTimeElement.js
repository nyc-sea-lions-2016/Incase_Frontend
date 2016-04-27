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
            <View style={{ padding: 20, marginTop: 100 }}>
              <Text>Start Time</Text>
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


module.exports = StartTimeElement

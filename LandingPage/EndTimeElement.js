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

import SearchListContainer from '../SearchListPage/SearchListContainer'

  class EndTimeElement extends Component {
      constructor(props){
          super(props);
          this.state = {
            date: new Date(),
          }
        }

        checkTime(ele){
          var ele_date = ele.created_at
          if(this.props.day == 'today'){

            return( start < ele_date && end > ele_date)

          }else if (this.props.day == 'yesterday') {
            let enteredStart = new Date(this.props.startTime);
            let enteredEnd = new Date(this.state.date);

            enteredStart.setDate(enteredStart.getDate() -1);
            enteredEnd.setDate(enteredEnd.getDate() -1);

            return( Date.parse(enteredStart) < Date.parse(ele_date) && Date.parse(enteredEnd) > Date.parse(ele_date) )

          }else if (this.props.day == 'twoDays') {
            let enteredStart = new Date(this.props.startTime);
            let enteredEnd = new Date(this.state.date);

            enteredStart.setDate(enteredStart.getDate() -2);
            enteredEnd.setDate(enteredEnd.getDate() -2);

            return(Date.parse(enteredStart) < Date.parse(ele_date) && Date.parse(enteredEnd) > Date.parse(ele_date))

          }else {
            return false
          }
        }

        sortTime(){
          return this.props.todayData.filter(this.checkTime.bind(this))
        }

        setEndDate(){
            this.props.navigator.push({
              title: 'Search Results',
              component: <SearchListContainer
                filteredData={this.sortTime()}
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
                <Text>End Time</Text>
              </View>
              <View style={ styles.datePicker }>

                <TouchableOpacity onPress={ this.setEndDate.bind(this) } style={{ padding: 5, alignItems: 'flex-end' }}>
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


module.exports = EndTimeElement

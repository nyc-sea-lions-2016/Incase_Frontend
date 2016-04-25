import React, {
  Image,
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import SetIntervalElementContainer from './SetIntervalElementContainer'

  class SetIntervalItemContainer extends Component {
    render() {
      console.log('siic props', this.props);
      return (
        <View style={setItemStyles.container}>
          <SetIntervalElementContainer
          startDateChanged={this.props.startDateChanged}
          endDateChanged={this.props.endDateChanged}
          onPressButton = {this.props.onPressButton}
          startDate={this.props.startDate}
          endDate={this.props.endDate}

          />
        </View>
      )
    };
  }

  const setItemStyles = StyleSheet.create({
    container: {
      paddingTop: 0,
      backgroundColor: "orange",
      width: 300,
      height: 675,
      alignItems: "center",
      borderRadius: 10,
    }
  })

module.exports = SetIntervalItemContainer

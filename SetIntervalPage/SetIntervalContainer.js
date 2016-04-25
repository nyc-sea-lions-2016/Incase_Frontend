import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import SetIntervalItemContainer from './SetIntervalItemContainer'

  class SetIntervalContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log('sic props', this.props);
      return (
        <View style={intervalContainerStyles.container}>
          <SetIntervalItemContainer
          startDateChanged={this.props.startDateChanged}
          endDateChanged={this.props.endDateChanged}
          onPressButton = {this.props.onPressButton}
          startDate={this.props.startDate}
          endDate={this.props.endDate}

          />
        </View>
      )
    }
  }

const intervalContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#409CE9",
    paddingTop: 25,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  }
})

module.exports = SetIntervalContainer

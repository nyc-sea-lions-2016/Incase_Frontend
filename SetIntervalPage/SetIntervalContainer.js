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
      this.state.currentView = 'index'
    }

    startDateChanged(d){
      console.log('startDateChanged', d)
      this.setState({startDate: d});
    }
    endDateChanged(d){
      console.log('endDateChanged', d)
      this.setState({endDate: d});
    }

    selectionButtonPressed() {
      this.setState({currentView: 'searchList'})
      console.log('Hello hello');
    }

      render() {
        if ( this.state.currentView === 'searchList' ) {
          return(
          <SearchListContainer
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          />
        );

        else {
          return (
          <View>
            <SetIntervalItemContainer
            startDateChanged={this.startDateChanged.bind(this)}
            endDateChanged={this.endDateChanged.bind(this)}
            onPressButton = {this.selectionButtonPressed.bind(this)}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            />
          </View>
          );
        }
      }
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

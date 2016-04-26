import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import SetIntervalItemContainer from './SetIntervalItemContainer'
  import SearchListContainer from '../SearchListPage/SearchListContainer'

  class SetIntervalContainer extends Component {
    constructor() {
      super();
      this.state = {
        startDate: new Date(),
        endDate: new Date(),
        currentView: 'index'
      }
    }

    startDateChanged(d){
      this.setState({startDate: d});
    }
    endDateChanged(d){
      this.setState({endDate: d});
    }

    selectionButtonPressed() {
      this.setState({currentView: 'searchList'});
    }

      render() {
        if ( this.state.currentView === 'searchList' ) {
          return(
          <SearchListContainer
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          />
        );

      } else {
          return (
          <View style={intervalContainerStyles.container}>
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

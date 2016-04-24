import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import SetIntervalItemContainer from '../SetIntervalPage/SetIntervalItemContainer'

  class SetIntervalContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={intervalContainerStyles.container}>
          <SetIntervalItemContainer/>
        </View>
      )
    };
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

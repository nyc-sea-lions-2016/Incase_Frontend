import React, {
  StyleSheet,
  AppRegistry,
  Component,
  Text,
  View
  } from 'react-native';

  import SetIntervalItemContainer from '../SetIntervalContainer/SetIntervalItemContainer'

  class SetIntervalContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={intervalContainerStyles.container}>
          <SetIntervalItemContainer/>
        </View>
      );
    }
  }

const intervalContainerStyles = StyleSheet.create({
  container: {
    
  }
})

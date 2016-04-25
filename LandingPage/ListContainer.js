import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ItemContainer from '../LandingPage/ItemContainer';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    }

  componentWillReceiveProps(nextProps) {
    this.setState({places: nextProps})
  }

  render() {
    if(this.props.places == []){
      var listNodes = this.props.places.map(function(place){
      return(
          <ItemContainer key={place.id} place={place} />
      )
    })
  } else{
    var listNodes = <Text>Travel around to fill this page up!</Text>
  }
    // debugger;
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
          {listNodes}
      </View>
    );
  }
}

  var styles = StyleSheet.create({
    container: {
      top: 25,
      flex: 1,
      paddingTop:40,
      backgroundColor: "#409ce9",
    }
  })


module.exports = ListContainer
// style={styles.container}
// AppRegistry.registerComponent('InCaseFrontend', () => InCaseFrontend);

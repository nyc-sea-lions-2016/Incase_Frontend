import React, {
  StyleSheet,
  AppRegistry,
  Component,
  ListView,
  Text,
  View
} from 'react-native';

  class ItemContainer extends Component {
    constructor(props){
      super(props);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({places: nextProps})
    }

    render(){
          return (
            <View style={styles.mainContainer}>
              <View>
              <Text style={styles.BoxTitleText}>{this.props.place.name}</Text>
              </View>
              <View>
              <Text style={styles.BoxBodyText}>{this.props.place.address}</Text>
              </View>
            </View>
          )
      }
    }


  const styles = StyleSheet.create({
    mainContainer: {
      alignSelf: "center",
      width:300,
      marginTop: 60,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20,
      flex:1,
      backgroundColor: 'orange',
    },

    BoxTitleText:{
    fontWeight:'bold',
    fontSize:20,
    marginBottom:10
    },

    BoxBodyText:{
    fontSize:16
    }
  })



module.exports = ItemContainer

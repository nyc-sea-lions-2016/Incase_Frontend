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
      this.setState({place: nextProps})
    }

    render(){
          return (
            <View style={styles.mainParent}>
              <View>
                <Text style={[styles.mainChild, styles.mainName]}>{this.props.place.name}</Text>
              </View>
              <View>
                <Text style={[styles.mainChild, styles.mainAddress]}>{this.props.place.address}</Text>
              </View>
              <View>
                <Text style={styles.mainChild}>#Category</Text>
              </View>
            </View>
          )
      }
    }


  const styles = StyleSheet.create({
    mainParent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        fontFamily: 'Helvetica Neue',
        borderBottomColor: '#ddd',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#fff'

    },
    mainName:{
      fontSize:14,
      margin:3,
      paddingBottom: 10,
      fontWeight: 'bold',

    },
    mainChild:{
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Helvetica Neue',
    },

    mainAddress:{
      fontSize: 13,
      fontFamily: 'Helvetica Neue',
      margin:3,
      paddingBottom: 10,
    }
  })



module.exports = ItemContainer

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

    setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({place: nextProps})
    }

    render(){
      if(this.props.place.categories !== []){
        var catNodes = this.props.place.categories.map(function(category){
          return(
              <Text key={category.id} style={styles.mainCategory}> {category.category} </Text>
          )
        })
      }
          return (
            <View style={styles.mainParent} ref={component => this._root = component}>
              <View>
                <Text style={[styles.mainChild, styles.mainName]}>{this.props.place.name}</Text>
              </View>
              <View>
                <Text style={[styles.mainChild, styles.mainAddress]}>{this.props.place.address}</Text>
              </View>
              <View>
                <Text>{catNodes}</Text>
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
        // fontFamily: 'Helvetica Neue',
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
      //fontFamily: 'Helvetica Neue',
    },

    mainAddress:{
      fontSize: 13,
      // fontFamily: 'Helvetica Neue',
      margin:3,
      // paddingBottom: 10,
    },
    mainCategory:{
      fontSize: 11,
      // fontFamily: 'Helvetica Neue',
      margin:3,
      paddingBottom: 10,
    }
  })



module.exports = ItemContainer

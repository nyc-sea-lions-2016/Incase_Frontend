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
    if(this.props.place.categories.length){
      var catNodes = this.props.place.categories.map(function(category){
        return(
          <Text key={category.id} style={[itemStyle.mainType]}> {category.category} </Text>
        )
      })
    }
    return (
      <View style={itemStyle.mainParent} ref={component => this._root = component}>
      <View>
      <Text style={[itemStyle.mainChild, itemStyle.mainName]}>{this.props.place.name}</Text>
      </View>
      <View>
      <Text style={[itemStyle.mainChild, itemStyle.mainType]}>{this.props.place.address}</Text>
      </View>
      <View>
      <Text style={[itemStyle.mainChild, itemStyle.mainName]}>{catNodes}</Text>
      </View>
      </View>
    )
  }
}


const itemStyle = StyleSheet.create({
  mainParent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop:15,
    paddingBottom:15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff'

  },
  mainName:{
    fontSize:14,
    margin:3,
    paddingBottom: 10,
    fontWeight: 'bold',
    paddingTop:10,

  },
  mainChild:{
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  mainType:{
    margin:3,
    flex: 3,
    flexDirection: 'row',
  },
  mainAddress:{
    fontSize: 13,
    margin:3,
  },
  mainCategory:{
    fontSize: 11,
    margin:3,
    paddingBottom: 10,
  },
  button: {
    borderRadius:10,
    justifyContent: 'center'
  },
  touchable: {
    borderRadius: 10
  },
})



module.exports = ItemContainer

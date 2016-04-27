import React, {
  StyleSheet,
  Navigator,
  TouchableHighlight,
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
  } from 'react-native';

  import SearchListContainer from '../SearchListPage/SearchListContainer';

  class HoodElement extends Component {
      constructor(props) {
        super(props);

      this.state = {
        text: ''
      }
    }

    checkCat(ele){
      return this.state.text === ele.categories[0].category
    }

    checkCategory(){
      return this.props.todayData.filter(this.checkCat.bind(this));
    }

    submitForm(){
      this.props.navigator.push({
        title: 'Search Results',
        component: <SearchListContainer
        filteredData={this.checkCategory()}
        text={this.state.text}
        />
      })
    }

    componentWillUnmount(){
      this.setState({text: this.state.text})
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>Category | Business Type</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />

          <TouchableHighlight onPress={this.submitForm.bind(this)}>
            <Text>Submit</Text>
          </TouchableHighlight>
        </View>
      )
    }
}

  const styles = StyleSheet.create({
    mainContainer: {
      width:300,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20,
      flex:1,
    },

    BoxTitleText:{
    fontWeight:'bold',
    color:'#fff',
    textAlign:'left',
    fontSize:20,
    marginBottom:10
    },

    BoxBodyText:{
    color:'#fff',
    fontSize:16
    }
  })


module.exports = HoodElement

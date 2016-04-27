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
      for(var i = 0; i < ele.categories.length; i++){
        return this.state.text.toLowerCase() === ele.categories[i].category
      }
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
        <View style={styles.mainContainer}>
          <Text style={styles.header}>Category | Business Type</Text>
          <TextInput
            style={{height: 40, backgroundColor: '#FFFFFF', marginBottom: 50, borderRadius: 10}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />

          <TouchableHighlight onPress={this.submitForm.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.submitText}>Submit</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
}

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#2199e8',
      alignItems: "center",
      color: '#FFFFFF',
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20,
      flex:1,
    },

    header: {
      fontSize: 28,
      marginTop: 70,
      marginBottom: 50,
      color: '#FFFFFF'
    },

    submitText: {
      paddingTop: 8,
      fontSize: 20,
      color: '#FFFFFF',
      alignSelf: "center",
    },

    button: {
      height: 40,
      width: 200,
      borderRadius: 10,
      backgroundColor: '#35d37c',
      textAlign: "center",
    }


  })


module.exports = HoodElement

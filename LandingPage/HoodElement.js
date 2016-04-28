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

    checkCategory(){
      var filteredArray = [];
      for(var i = 0; i < this.props.todayData.length; i++) {
        for(var j = 0; j < this.props.todayData[i].categories.length; j++) {
          if(this.state.text.toLowerCase().trim() === this.props.todayData[i].categories[j].category)
            filteredArray.push(this.props.todayData[i])
        }
      }
      return filteredArray.slice(0, 50);
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

          <TouchableHighlight
          onPress={this.submitForm.bind(this)}
          style={styles.touchable}
          >
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
      backgroundColor: 'rgba(143, 185, 243, 0.1)',
      alignItems: "center",
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20,
      flex:1,
    },

    header: {
      fontSize: 28,
      marginTop: 80,
      marginBottom: 50,
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
    },

    touchable: {
      borderRadius: 10,
    }

  })


module.exports = HoodElement

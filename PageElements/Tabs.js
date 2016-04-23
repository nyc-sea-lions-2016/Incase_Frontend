import React, {
  Component,
  TabBarIOS,
  StyleSheet,
  View,
  Text,
  AppRegistry
} from 'react-native'

class Tabs extends Component {
  constructor(){
    super();
    this.state = {selectedTab: 'tabOne'}
  }
  setTab(tabId){
    this.setState({selectedTab: tabId})
  }
  render(){
    return (

      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabOne'}
          systemIcon='history'
          onPress={() => this.setTab('tabOne')}>
          <View>
            <Text>Today</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabTwo'}
          systemIcon='bookmarks'
          onPress={() => this.setTab('tabTwo')}>
          <View>
            <Text>Today2</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabThree'}
          systemIcon='bookmarks'
          onPress={() => this.setTab('tabThree')}>
          <View>
            <Text>Today3</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

// const styles = StyleSheet.create({
// })
// AppRegistry.registerComponent('Tabs', () => Tabs);

module.exports = Tabs;

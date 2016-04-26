import React, {
  StyleSheet,
  AppRegistry,
  DatePickerIOS,
  Component,

  Text,
  View
  } from 'react-native';

class SearchListContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      searchItem: this.ds.cloneWithRows([]),
    };
  }

  renderOne(searchItem) {
    return (
      <ItemContainer key={searchItem.id} item={searchItem} />
    )
  }

    render() {
      return(
        <View>
          <ListView
            dataSource={this.state.searchItem}
            renderRow={this.renderOne}
          />
        </View>
      )
    }

}

module.exports = SearchListContainer

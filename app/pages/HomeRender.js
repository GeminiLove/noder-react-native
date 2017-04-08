import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view'
import {Navigation} from 'react-native-navigation'
import Api from '../util/Api'
import Styles from '../other/Styles'
import * as Colors from '../other/Colors'
import TopicsTabBar from '../component/TopicsTabBar'
import CommonList from '../component/CommonList'

export default class HomeRender extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: 'white',
    navBarButtonColor: 'black'
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {

    };
  }

  onNavigatorEvent(event) {

  }

  componentDidMount(){
    // fetch(Api.topics)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     if (responseData) {
    //       this.setState({
    //         dataSource: this.state.dataSource.cloneWithRows(responseData.data),
    //       });
    //     }
    //   })
    // .done();

    // this.props.navigator.push({
    //   screen: 'Noder.DetailRender',
    //   title: '帖子详情'
    // });
    console.log(this.props.navigator.push);
  }

  render() {
    return (
      // <ListView
      //   dataSource={this.state.dataSource}
      //   renderRow={this.renderRow.bind(this)}
      //   renderSeparator={this.renderSeparator.bind(this)}
      //   style={styles.listView}
      // />
     <ScrollableTabView
        style={styles.scrollableTabView}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarInactiveTextColor={Colors.grayColor}
        tabBarActiveTextColor={Colors.blackColor}
        renderTabBar={() => <TopicsTabBar/>}
      >
        <CommonList tabLabel='全部' navigator={this.props.navigator}></CommonList>
        <CommonList tabLabel='精华' navigator={this.props.navigator}></CommonList>
        <CommonList tabLabel='分享' navigator={this.props.navigator}></CommonList>
      </ScrollableTabView>
    )
  }

  // renderRow(item, sectionID, rowID){
  //   return(
  //     <TouchableHighlight
  //       style={styles.cell}
  //       onPress={() => console.log(13231)}
  //       >
  //       <View>
  //
  //       </View>
  //     </TouchableHighlight>
  //   )
  // }
  // renderSeparator(sectionID, rowID, adjacentRowHighlighted){
  //   return(
  //     <View key={`{sectionID}-${rowID}`} style={styles.separator}/>
  //   )
  // }
}

const styles = {
  listView: {
    flex: 1,
    backgroundColor: 'white'
  },
  cell: {
    height: 74,
    flex: 1,
    backgroundColor: 'white'
  },
  scrollableTabView: {
    backgroundColor: 'white',
  },
  tabBarUnderline: {
    backgroundColor: 'white',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgb(230,230,230)',
    flex: 1,
  },
  cellImage:{

  }
}

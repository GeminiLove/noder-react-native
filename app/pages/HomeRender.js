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
    this.state = {

    };
  }


  render() {
    return (

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

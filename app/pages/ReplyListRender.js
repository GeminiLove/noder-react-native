import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  requireNativeComponent,
} from 'react-native';

import DetailHeader from '../component/DetailHeader'
import * as Colors from '../other/Colors'
import Api from '../util/Api'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'

var HtmlView = requireNativeComponent('RCTHtmlView', null);

export default class DetailRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
  	}
  }
  componentDidMount(){
    this.setState({
      dataSource: this.props.data,
    });
  }
  render(){
      if (this.state.dataSource.length) {
        return(
          <FlatList
            initialListSize={10}
            data={this.state.dataSource}
            renderItem={({item, index}) => this.renderRow(item, index)}
            keyExtractor={item => item.id}
            // legacyImplementation = {true}
            // ItemSeparatorComponent={() => this.renderSeparator()}
            // getItemLayout={(data, index) => this.getItemLayout(data, index)}
            style={styles.listView}
          />
        )
      }
      else {
        return(
          <View/>
        )
      }
  }


  renderRow(item, index){
    return(
      <View style={styles.cellContent}>
        <Image source={{uri: item.author.avatar_url}} style={styles.avatar}/>
        <View style={styles.cellOtherView}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{item.author.loginname}</Text>
            <Text style={styles.indexText}>{index + '楼'}</Text>
          </View>
          {/* <HtmlView
              content={item.content}
              style={[styles.htmlView, {height: cellHeight}]}
              onChange={(event) => this._onChange(event, index)}
            /> */}
          <HTMLView
            value={item.content}
            style={styles.htmlView}
            stylesheet={htmlStyles}
          />
          <Text style={styles.relativeText}>{this._relative(item)}</Text>
        </View>
        <View style={styles.separator}></View>
      </View>
    )
  }

  renderSeparator(){
    return(
      <View style={styles.separator}/>
    )
  }
  _relative(item){
    return moment(item.create_at).fromNow()
  }
}

const htmlStyles = {
  a: {
    fontSize: 15,
    color: Colors.blueColor,
  },
  p: {
    fontSize: 15,
    color: Colors.blackColor,
    lineHeight: 20
  }
};

const styles = {
  listView: {
    flex: 1,
    backgroundColor: 'white'
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.separatorColor,
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 0,
  },
  htmlView: {
    flex: 1,
  },
  cellContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16
  },
  cellOtherView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nameText: {
    fontSize: 12,
    color: Colors.grayColor,
  },
  indexText: {
    fontSize: 12,
    color: Colors.blackColor,
  },
  relativeText: {
    fontSize: 10,
    color: Colors.grayColor
  }
}

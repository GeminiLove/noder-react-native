import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Api from '../util/Api'
import Styles from '../other/Styles'
import * as Colors from '../other/Colors'
import moment from 'moment'

const WindowWidth = Dimensions.get('window').width

export default class CommonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: []
  	}
  }
  _relative(item){
    return moment(item.create_at).fromNow()
  }
  _rowAction(item){
    this.props.navigator.push({
      screen: 'Noder.DetailRender',
      title: '帖子详情',
      backButtonTitle: ' ',
      passProps: {data: item},
    })
  }
  renderRow(item){
    let markIcon = null;
    if (item.good) {
      markIcon = require('../assets/images/iconStar.png')
    }
    else {
      markIcon = require('../assets/images/iconTop.png')
    }
    return(
      <TouchableHighlight style={{flex:1}} onPress={()=>this._rowAction(item)}>
        <View style={styles.cell}>
          <Image source={{uri: item.author.avatar_url}} style={styles.avatar}/>
          <View style={styles.content}>
            <View style={styles.topContent}>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Image source={markIcon} opacity={item.top || item.good}
              />
            </View>
            <View style={styles.bottomContent}>
              <Text style={styles.create}>{this._relative(item)}</Text>
              <View style={styles.reply}>
                <Image
                  source={require('../assets/images/iconEye.png')}
                  style={styles.eyeImage}
                />
                <Text style={styles.replyText}>{item.visit_count}</Text>
                <Image
                  source={require('../assets/images/iconMessae.png')}
                  style={styles.messageImage}
                />
                <Text style={styles.replyText}>{item.reply_count}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  renderSeparator(){
    return(
      <View style={styles.separator}/>
    )
  }
  componentDidMount(){
    let url = Api.topics;
    if (this.props.tabLabel === '全部') {
      url = Api.topics
    }
    else if (this.props.tabLabel === '精华') {
      url = Api.good
    }
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData) {
          this.setState({
            dataSource: responseData.data,
          });
        }
      })
    .done();
  }
  componentWillReceiveProps(nextProps) {

	}
  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        keyExtractor={item => item.id}
        renderItem={({item}) => this.renderRow(item)}
        ItemSeparatorComponent={this.renderSeparator.bind(this)}
        style={styles.listView}
      />
    )
  }
}

const styles = {
  listView: {
    flex: 1,
    backgroundColor: 'white'
  },
  cell: {
    height: 76,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.separatorColor,
    flex: 1,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.placeholderColor
  },
  topContent: {
    // flex: 1,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContent: {
    // flex: 1,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginLeft: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.blackColor,
    width: WindowWidth - 60 - 80
  },
  create: {
    fontSize: 10,
    fontWeight: '200',
    color: Colors.blackColor
  },
  reply: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  replyText: {
    fontSize: 10,
    fontWeight: '200',
    color: Colors.blackColor
  },
  eyeImage: {
    marginRight: 5
  },
  messageImage: {
    marginLeft: 10,
    marginRight: 5
  }
}

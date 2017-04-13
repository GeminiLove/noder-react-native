# noder-react-native

这是一个 [cnodejs](https://cnodejs.org/) 的客户端，只支持 iOS 平台。


## Install
1. 进入根目录执行 `npm install`
2. 安装 [react-native-navigation](https://github.com/wix/react-native-navigation)：[文档](http://wix.github.io/react-native-navigation/#/installation-ios)
3. 安装 [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner)：[文档](https://github.com/moaazsidat/react-native-qrcode-scanner)
4. 进入 ios 目录，执行`pod install`

### 技术
1. [HTMLKit](https://github.com/iabudiab/HTMLKit) ，HTML 的解析
2. [AsyncDisplayKit](https://github.com/facebook/AsyncDisplayKit) 渲染主题内容图文混排的页面
3. [react-native-navigation](https://github.com/wix/react-native-navigation) 用于页面管理和跳转
4. [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner) 用于扫描二维码
5. [react-native-htmlview](https://github.com/jsdf/react-native-htmlview) 用于主题回复的显示
6. [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view) 首页的滚动视图管理

### 设计

部分设计照搬了锤子论坛安卓客户端，项目中包含了设计的源文件，请用 Sketch 43.0 以上版本打开。

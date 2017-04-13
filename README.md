# noder-react-native

这是一个 [cnodejs](https://cnodejs.org/) 的客户端，只支持 iOS 平台。


## Install
1. 进入根目录执行 `npm install`
2. 安装 [react-native-navigation](https://github.com/wix/react-native-navigation)：[文档](http://wix.github.io/react-native-navigation/#/installation-ios)
3. 安装 [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner)：https://github.com/moaazsidat/react-native-qrcode-scanner
4. 进入 ios 目录，执行`pod install`

### 技术
1. [react-native-navigation](https://github.com/wix/react-native-navigation) 用于页面管理和跳转
2. [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner) 用于扫描二维码
3. [HTMLKit](https://github.com/iabudiab/HTMLKit) HTML 的解析
4. [AsyncDisplayKit](https://github.com/facebook/AsyncDisplayKit) 渲染主题内容图文混排的页面

### 设计
部分设计照搬了锤子论坛安卓客户端，

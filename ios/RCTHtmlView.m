//
//  RCTHtmlView.m
//  Noder
//
//  Created by bawn on 07/04/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RCTHtmlView.h"
#import <React/RCTConvert.h>
#import "LCHtmlNode.h"
#import <HTMLKit.h>
#import <EXTScope.h>

@interface RCTHtmlView ()

@property (nonatomic, strong) LCHtmlNode *htmlNode;
@property (nonatomic, strong) NSString *content;
@property (nonatomic, copy) RCTDirectEventBlock onChange;

@end

@implementation RCTHtmlView

- (instancetype)initWithFrame:(CGRect)frame{
  self = [super initWithFrame:frame];
  if (self) {
    LCHtmlNode *htmlNode = [[LCHtmlNode alloc] init];
    [self addSubnode:htmlNode];
    self.htmlNode = htmlNode;
  }
  return self;
}

RCT_NOT_IMPLEMENTED(- (instancetype)initWithCoder:(NSCoder *)aDecoder)


- (void)layoutSubviews{
  [super layoutSubviews];
  self.htmlNode.frame = self.bounds;
}



- (void)setContent:(NSString *)content{
  _content = content;
  HTMLDocument *document = [HTMLDocument documentWithString:_content];
  HTMLElement *body = document.body;
  HTMLElement *div = (HTMLElement *)body.firstChild;
  self.htmlNode.nodes = div.childNodes;
  @weakify(self);
  self.htmlNode.layoutDidFinishBlock = ^(CGSize size) {
    @strongify(self);
    if (self.onChange) {
      NSDictionary *event = @{@"height" : @(size.height)};
      self.onChange(event);
    }
  };
}

@end

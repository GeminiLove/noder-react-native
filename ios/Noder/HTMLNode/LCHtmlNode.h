//
//  LCHtmlNode.h
//  Noder
//
//  Created by bawn on 07/04/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <AsyncDisplayKit/AsyncDisplayKit.h>

typedef void (^LCLayoutDidFinishBlock)(CGSize size);

@interface LCHtmlNode : ASDisplayNode

@property (nonatomic, strong) NSOrderedSet *nodes;
@property (nonatomic, copy) LCLayoutDidFinishBlock layoutDidFinishBlock;

//- (instancetype)initWithArray:(NSOrderedSet *)nodes;

@end

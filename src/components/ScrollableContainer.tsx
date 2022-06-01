import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react';
import {Platform, RefreshControl, RefreshControlProps, StyleProp, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
  isRefreshing?: boolean;
  onRefresh?():  void;
  stickyHeaderIndices?: Array<number>;
};

export interface ScrollRef {
  scrollToBottom(): void;
  scrollToTop(): void;
}
const ScrollableContainer: ForwardRefRenderFunction<ScrollRef, Props> = (
  { children,
    style = {},
    containerStyle = {},
    refreshControl,
    isRefreshing = false,
    onRefresh,
    stickyHeaderIndices },
  ref,
) => {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      scrollRef.current?.scrollToEnd(true);
    },
    scrollToTop: () => {
      scrollRef.current?.scrollToPosition(0, 0);
    },
  }));

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      style={[style]}
      refreshControl={
        refreshControl ||
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />}
      contentContainerStyle={[containerStyle]}
      alwaysBounceHorizontal={false}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={400}
      stickyHeaderIndices={stickyHeaderIndices}
      extraScrollHeight={Platform.OS === 'ios' ? 50 : 0}
      nestedScrollEnabled
      enableOnAndroid={true}
    
      >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default forwardRef(ScrollableContainer);

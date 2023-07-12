import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const SIZE = 50;
const CIRCLE_RADIUS = 100;
const BORDER_WIDTH = 4;

export default function PanGesture() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { translateX: number; translateY: number }
  >({
    onStart: (e, ctx) => {
      ctx.translateX = translateX.value;
      ctx.translateY = translateY.value;
    },
    onActive: (e, ctx) => {
      const tX = e.translationX + ctx.translateX;
      const tY = e.translationY + ctx.translateY;
      const distance = Math.sqrt(tX ** 2 + tY ** 2);

      const sinValue = tY / distance;
      const cosValue = tX / distance;

      const nY = sinValue * (CIRCLE_RADIUS - SIZE / 2 - BORDER_WIDTH);
      const nX = cosValue * (CIRCLE_RADIUS - SIZE / 2 - BORDER_WIDTH);

      if (distance > CIRCLE_RADIUS - SIZE / 2 - BORDER_WIDTH) {
        translateX.value = nX;
        translateY.value = nY;
      } else {
        translateX.value = e.translationX + ctx.translateX;
        translateY.value = e.translationY + ctx.translateY;
      }
    },
    onEnd: (e) => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));
  return (
    <View style={styles.circle}>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.square, rStyle]} />
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  square: { width: SIZE, height: SIZE, backgroundColor: 'magenta', borderRadius: SIZE / 2 },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CIRCLE_RADIUS,
    borderWidth: BORDER_WIDTH,
    borderColor: 'white',
  },
});

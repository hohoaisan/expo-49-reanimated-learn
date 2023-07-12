import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};

export default function Introduce() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withTiming(0.5, { duration: 500 }), -1, true);
    scale.value = withRepeat(withSpring(1, { duration: 1000 }), -1, true);
  }, []);

  return (
    <Animated.View
      style={[{ width: 100, height: 100, backgroundColor: 'blue' }, reanimatedStyle]}
    ></Animated.View>
  );
}

import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import PanGesture from '@/reanimated/2.PanGesture';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PanGesture />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

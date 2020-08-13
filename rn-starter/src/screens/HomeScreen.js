import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
      <Text style={styles.text}>Hello Home screen!</Text>
      <Button title='Go to components demo' onPress={() => navigation.navigate('Components')} />
      <Button title='Go to list demo' onPress={()=> navigation.navigate('List')} />
      <Button title='Go to image demo' onPress={()=> navigation.navigate('Image')} />
      <Button title='Go to counter demo' onPress={()=> navigation.navigate('Counter')} />
      <Button title='Go to colors demo' onPress={()=> navigation.navigate('Colors')} />
      <Button title='Go to squareScreen demo' onPress={()=> navigation.navigate('Square')} />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;

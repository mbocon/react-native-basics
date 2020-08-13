import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [{ name: 'Friend 1' }, { name: 'Friend 2' }, { name: 'Friend 3' }, { name: 'Friend 4' }];
	return (
		<View>
			<Text>List Screen</Text>
            <FlatList 
                keyExtractor={ friend => friend.name }
                data={friends}
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>
                }} />
		</View>
	);
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;

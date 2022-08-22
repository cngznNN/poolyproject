import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

const BackButton = (props) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity style={{
			marginLeft: 8,
		}} {...props} onPress={() => navigation.goBack()}>
			<Image source={require('../assets/back.png')} style={{
				width: 18.41,
				height: 15.41
			}} />
		</TouchableOpacity>
	);
}

export default BackButton;
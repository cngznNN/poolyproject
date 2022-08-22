import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CardListScreen from './screens/CardListScreen';
import BackButton from './components/BackButton';

const Stack = createNativeStackNavigator();

const App = () => {


	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Search"
					component={SearchScreen}
					options={{
						headerShown: true,
						headerTitle: '',
						headerShadowVisible: false,
						headerLeft: (props) => <BackButton />
					}}
				/>
				<Stack.Screen
					name="CardList"
					component={CardListScreen}
					options={{
						headerShown: true,
						headerBackVisible: false,
						headerTitle: 'Sürüşler',
						headerTitleAlign: 'center',
						headerShadowVisible: false,
						headerTitleStyle: {
							fontFamily: 'Intern',
							fontSize: 22,
							fontWeight: '400'
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

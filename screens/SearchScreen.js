import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchScreen = ({ navigation }) => {
	const RenderTop = () => {
		return (
			<React.Fragment>
				<View style={styles.inputContainer}>
					<GooglePlacesAutocomplete
						renderLeftButton={() => {
							return (
								<View style={{
									alignContent: 'center',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: 6
								}}>
									<Text style={{
										fontSize: 16,
										fontWeight: 'bold',
										color: '#000',
									}}>Nereden:</Text>
								</View>
							)
						}}
						onPress={(data, details = null) => {
							console.log(data, details);
						}}
						query={{
							key: 'GOOGLE_API_KEY',
							language: 'tr',
							components: 'country:tr',
						}}
					/>
				</View>
				<View style={styles.inputContainer}>
					<GooglePlacesAutocomplete
						renderLeftButton={() => {
							return (
								<View style={{
									alignContent: 'center',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: 6
								}}>
									<Text style={{
										fontSize: 16,
										fontWeight: 'bold',
										color: '#000',
									}}>Nereye:</Text>
								</View>
							)
						}}
						onPress={(data, details = null) => {
							navigation.navigate('CardList');
						}}
						query={{
							key: 'GOOGLE_API_KEY',
							language: 'tr',
							components: 'country:tr',
						}}
					/>
				</View>
			</React.Fragment>
		)
	}

	const RenderBottom = () => {
		return (<View style={{ flexDirection: 'column', marginTop: 35 }}>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				width: '100%',
				alignItems: 'center',
			}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image source={require('../assets/home.png')} style={{
						width: 18,
						height: 19.5,
						marginRight: 16
					}} />
					<View style={{
						flexDirection: 'column',
					}}>
						<Text style={styles.text_bold}>Ev</Text>
						<Text style={styles.text_normal}>İstanbul, Beşiktaş</Text>
					</View>
				</View>
				<Image source={require('../assets/arrow_forward.png')} style={{
					width: 8,
					height: 14,
				}} />
			</View>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				width: '100%',
				alignItems: 'center',
				marginTop: 24
			}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image source={require('../assets/biz.png')} style={{
						width: 20,
						height: 19,
						marginRight: 16
					}} />
					<View style={{
						flexDirection: 'column',
					}}>
						<Text style={styles.text_bold}>İş</Text>
						<Text style={styles.text_normal}>İstanbul, Maslak</Text>
					</View>
				</View>
				<Image source={require('../assets/arrow_forward.png')} style={{
					width: 8,
					height: 14,
				}} />
			</View>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				width: '100%',
				alignItems: 'center',
				marginTop: 24,
			}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image source={require('../assets/saved.png')} style={{
						width: 20.31,
						height: 17.74,
						marginRight: 16
					}} />
					<View style={{
						flexDirection: 'column',
					}}>
						<Text style={styles.text_bold}>Kaydedilenler</Text>
					</View>
				</View>
				<Image source={require('../assets/arrow_forward.png')} style={{
					width: 8,
					height: 14,
				}} />
			</View>

		</View>)
	}

	const RenderHr = ({ width }) => {
		return (<View
			style={{
				marginTop: width != undefined ? width : 25,
				borderBottomColor: 'black',
				borderBottomWidth: StyleSheet.hairlineWidth,
			}}
		/>)
	}

	const RenderLocations = () => {
		const items = [{
			title: 'İstanbul Yeni Havalimanı',
			subtitle: 'İstanbul, Alibeyköy'
		}, {
			title: 'İstanbul Sabiha Gökçen',
			subtitle: 'İstanbul, Pendik'
		}, {
			title: 'Ankara Esenboğa Havalimanı',
			subtitle: 'Ankara, Çubuk'
		},]

		const RenderCart = ({ item }) => {
			return (<>
				{item.map((item, index) => {
					return (
						<View key={index} style={{
							flexDirection: 'row',
							marginTop: 27,
							alignItems: 'center',
							paddingBottom: 20,
							borderBottomColor: '#ADB3BC',
							borderBottomWidth: 1,
						}}>
							<Image source={require('../assets/old_location.png')} style={{
								width: 24,
								height: 24
							}} />
							<View style={{ flexDirection: 'column', marginLeft: 13 }}>
								<Text style={styles.text_bold}>{item.title}</Text>
								<Text style={styles.text_normal}>{item.subtitle}</Text>
							</View>
						</View>)

				}
				)}
			</>
			)

		}

		return (
			<View style={{ flexDirection: 'column', marginTop: 20 }}>
				<Text style={{
					fontSize: 14,
					fontWeight: '400',
					color: '#000'
				}}>Geçmiş Lokasyonlar</Text>
				<RenderCart item={items} />
			</View>
		)
	}

	return (
		<FlatList
			style={styles.container}
			data={[{}]}
			keyboardShouldPersistTaps={'handled'}
			keyExtractor={() => null}
			renderItem={() => {
				return (
					<>
						<RenderTop />
						<RenderHr />
						<RenderBottom />
						<RenderHr width={45} />
						<RenderLocations />
					</>
				)
			}}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 26,
		backgroundColor: '#FFF'
	},
	inputContainer: {
		flexDirection: 'row',
		fontSize: 16,
		fontWeight: '500',
		borderWidth: 2,
		borderColor: '#000',
		borderRadius: 10,
		paddingHorizontal: 21,
		marginTop: 20
	},
	text_bold: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#000'
	},
	text_normal: {
		fontWeight: '400',
		fontSize: 14,
		color: '#000'
	},

});

export default SearchScreen

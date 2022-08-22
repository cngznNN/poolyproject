import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'

const CardListScreen = () => {
	const RenderCart = ({ item }) => {
		return (
			<View style={{
				flexDirection: 'column',
				paddingHorizontal: 27,
				paddingVertical: 16,
				marginTop: 20,
				borderColor: '#000',
				borderWidth: 2,
				borderRadius: 8,
				marginBottom: 20,
				paddingBottom: 30
			}}>
				<TouchableOpacity style={{
					position: 'absolute',
					bottom: 10,
					right: -12,
					width: 52,
					height: 52,
					backgroundColor: '#000',
					borderRadius: 50,
					justifyContent: 'center',
					alignItems: 'center',
					shadowColor: '#000',
					shadowOffset: { width: 1, height: 1 },
					shadowOpacity: 0.4,
					shadowRadius: 3,
					elevation: 5,
				}}>
					<Image source={require('../assets/card/arrow_button.png')}
						style={{
							width: 18.06,
							height: 15.8,
						}} />
				</TouchableOpacity>
				<View style={{ flexDirection: 'column' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{
							fontFamily: 'Intern',
							color: '#898A8D',
							fontWeight: '400'
						}}>Rota - </Text>
						<Text style={{
							fontFamily: 'Intern',
							color: '#23AA49',
							fontWeight: '400'
						}}>Başlangıç</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{
							marginTop: 18,
						}}>
							<View style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}>
								<Image source={require('../assets/card/circle.png')} style={{ width: 18, height: 18 }} />
								<Text style={{
									fontFamily: 'Intern',
									fontWeight: '400',
									fontSize: 16,
									color: '#000',
									marginLeft: 10
								}}>Küçük Ayasofya</Text>
							</View>
							<View style={{
								borderStyle: 'dashed',
								borderWidth: 1,
								borderColor: '#000',
								width: 0,
								height: 17,
								marginVertical: 10,
								marginLeft: 7.5
							}}>
							</View>
							<View style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}>
								<Image source={require('../assets/card/location.png')} style={{ width: 18, height: 21 }} />
								<Text style={{
									fontFamily: 'Intern',
									fontWeight: '400',
									fontSize: 16,
									color: '#000',
									marginLeft: 10,
								}}>Maslak</Text>
							</View>
						</View>
						<View style={{
							justifyContent: 'center',
							flexDirection: 'row',
							height: '100%',
						}}>
							<View
								style={{
									backgroundColor: '#ADB3BC',
									width: 1,
									height: 30,
									marginRight: 20,
									marginTop: 40,
								}}
							/>
							<View style={{ flexDirection: 'column' }}>
								<View style={{ flexDirection: 'column' }}>
									<Text style={{
										fontFamily: 'Intern',
										fontWeight: '400',
										fontSize: 14,
										color: '#000',
									}}>Tahmini Tutar</Text>
									<Text style={{
										fontFamily: 'Intern',
										fontWeight: 'bold',
										fontSize: 22,
										color: '#23AA49'
									}}>68.72₺</Text>
								</View>
								<View style={{ flexDirection: 'column', marginTop: 6 }}>
									<Text style={{
										fontFamily: 'Intern',
										fontWeight: '400',
										fontSize: 14,
										color: '#000',
									}}>Tahmini Varış Süresi</Text>
									<Text style={{
										fontFamily: 'Intern',
										fontWeight: 'bold',
										fontSize: 22,
										color: '#000'
									}}>20dk</Text>
								</View>
							</View>
						</View>
					</View>
					<View>
						<View style={{
							marginVertical: 27,
							borderStyle: 'dashed',
							borderWidth: 1,
							borderColor: '#ADB3BC',
							width: '100%',
							height: 0,
						}}>
						</View>
						<Text style={{
							fontFamily: 'Intern',
							color: '#898A8D',
							fontWeight: '400'
						}}>
							Sürücü
						</Text>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 15
						}}>
							<View style={{
								alignSelf: 'flex-start',
							}}>
								<Image source={require('../assets/card/avatar.png')}
									style={{ width: 32, height: 32 }} />
							</View>
							<View>
								<View style={{
									flexDirection: 'column',
									marginTop: 5
								}}>
									<View style={{ flexDirection: 'row' }}>
										<Text style={{
											marginLeft: 10,
											fontWeight: 'bold',
											fontSize: 14,
											color: '#000',
											fontFamily: 'Intern'
										}}>
											Cengizhan Uludoğan - 4.8
										</Text>
										<Text>
											/5
										</Text>
										<Image source={require('../assets/card/university1.png')}
											style={{ marginLeft: 7, marginRight: 4, width: 24, height: 24 }} />
										<Image source={require('../assets/card/university2.png')}
											style={{ width: 24, height: 24 }} />
									</View>

									<View style={{ flexDirection: 'row' }}>
										<Text style={{
											fontFamily: 'Intern',
											color: '#000',
											fontWeight: 'bold',
											marginLeft: 10,
											fontSize: 22
										}}>
											14dk
										</Text>
										<Text style={{
											fontFamily: 'Intern',
											color: '#898A8D',
											fontWeight: 'normal',
											marginLeft: 6,
											fontSize: 22
										}}>
											içinde varış
										</Text>
									</View>
								</View>
							</View>
						</View>



					</View>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={[0, 1, 2]}
				keyboardShouldPersistTaps={'handled'}
				keyExtractor={(item, index) => index}
				ListHeaderComponent={<BackButton style={{
					paddingHorizontal: 26,
				}} />}
				renderItem={() => {
					return (
						<View style={{ paddingHorizontal: 26 }}>

							<RenderCart />
						</View>)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: '#FFF',

	}
})

export default CardListScreen
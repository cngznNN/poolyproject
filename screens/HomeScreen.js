import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const mapStyle = [
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'transit',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
];

const car_markers = [
    {
        src: require('../assets/marker_people.png'),
        type: 'people',
        coordinate: { latitude: 41.112692, longitude: 29.020834 },
    },
    {
        src: require('../assets/marker_people.png'),
        type: 'people',
        coordinate: { latitude: 41.112152, longitude: 29.022867 },
    },
    {
        src: require('../assets/marker_car.png'),
        type: 'car',
        coordinate: { latitude: 41.113447, longitude: 29.022867 },
    },
    {
        src: require('../assets/marker_car.png'),
        type: 'car',
        coordinate: { latitude: 41.112235, longitude: 29.020022 },
    },
];

const HomeScreen = ({ navigation }) => {
    const handleSearch = () => {
        navigation.navigate('Search');
    };

    const handlePin = () => {
        return (
            <View>
                <ImageBackground
                    source={require('../assets/custom_pin.png')}
                    style={{ height: 40, width: 30 }}></ImageBackground>
            </View>
        );
    };

    const handleMarker = ({ src, type }) => {
        var { width, height } =
            type == 'car' ? { width: 48, height: 36 } : { width: 28, height: 37 };

        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        paddingHorizontal: 10,
                    }}>
                    <Text
                        style={{
                            color: 'black',
                            fontWeight: '400',
                            shadowOffset: { width: 10, height: 10 },
                            shadowColor: 'black',
                            shadowOpacity: 1,
                            elevation: 4,
                        }}>
                        Lorem ipsum
                    </Text>
                </View>

                <ImageBackground
                    source={src}
                    style={{ height: height, width: width }}></ImageBackground>
            </View>
        );
    };

    const RenderMap = () => {
        return (
            <MapView
                customMapStyle={mapStyle}
                style={styles.map}
                initialRegion={{
                    latitude: 41.112551,
                    longitude: 29.0217,
                    latitudeDelta: 0.0045,
                    longitudeDelta: 0.0045,
                }}
                showsUserLocation={false}
                showsBuildings={false}
                showsIndoors={false}
                showsCompass={false}
                showsMyLocationButton={false}
                showsPointsOfInterest={false}
                minZoomLevel={0}
                mapType={'standard'}
                provider={PROVIDER_GOOGLE}
                zoomControlEnabled={false}>
                <Marker
                    coordinate={{
                        latitude: 41.112551,
                        longitude: 29.0217,
                    }}>
                    {handlePin()}
                </Marker>
                {car_markers.map((marker, index) => (
                    <Marker key={index} coordinate={marker.coordinate}>
                        {handleMarker(marker)}
                    </Marker>
                ))}
            </MapView>
        );
    };

    const RenderTop = () => {
        return (
            <View style={styles.top}>
                <View>
                    <Image
                        source={require('../assets/avatar.png')}
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </View>
                <View style={styles.walletContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 4,
                        }}>
                        <View style={styles.wallet}>
                            <Image
                                source={require('../assets/wallet.png')}
                                style={{
                                    width: 12,
                                    height: 12,
                                }}
                            />
                        </View>

                        <Text style={styles.price}>146.59₺</Text>
                    </View>
                    <Text style={styles.topText}>Cengizhan Uludoğan</Text>
                </View>
                <View style={styles.boxContainer}>
                    <View
                        style={{
                            backgroundColor: '#FFF',
                            borderRadius: 50,
                            padding: 10,
                            position: 'relative',
                        }}>
                        <Image
                            source={require('../assets/notify.png')}
                            style={{
                                width: 17.93,
                                height: 20,
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                backgroundColor: '#FF0000',
                                borderRadius: 50,
                                width: 12,
                                height: 12,
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    color: '#FFF',
                                    fontSize: 8,
                                    textAlign: 'center',
                                }}>
                                2
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FFF',
                            borderRadius: 50,
                            padding: 10,
                            marginLeft: 9,
                        }}>
                        <Image
                            source={require('../assets/announce.png')}
                            style={{
                                width: 17.93,
                                height: 20,
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                backgroundColor: '#FF0000',
                                borderRadius: 50,
                                width: 12,
                                height: 12,
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    color: '#FFF',
                                    fontSize: 8,
                                    textAlign: 'center',
                                }}>
                                5
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FFF',
                            borderRadius: 50,
                            padding: 10,
                            marginLeft: 9,
                        }}>
                        <Image
                            source={require('../assets/people.png')}
                            style={{
                                width: 17.93,
                                height: 20,
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                backgroundColor: '#FF0000',
                                borderRadius: 50,
                                width: 12,
                                height: 12,
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    color: '#FFF',
                                    fontSize: 8,
                                    textAlign: 'center',
                                }}>
                                4
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    const RenderBottom = () => {
        return (
            <View style={styles.bottom}>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 50,
                        padding: 20,
                        width: 36,
                        height: 36,
                        marginHorizontal: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowOffset: { width: 10, height: 10 },
                        shadowColor: 'black',
                        shadowOpacity: 1,
                        elevation: 3,
                    }}>
                    <Image
                        source={require('../assets/peoples.png')}
                        style={{
                            width: 14,
                            height: 14,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#2F1FDA',
                        borderRadius: 50,
                        padding: 20,
                        width: 72,
                        height: 72,
                        marginHorizontal: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowOffset: { width: 20, height: 20 },
                        shadowColor: 'black',
                        shadowOpacity: 1,
                        elevation: 10,
                    }}
                    onPress={handleSearch}>
                    <Image
                        source={require('../assets/search.png')}
                        style={{
                            width: 33,
                            height: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 50,
                        padding: 20,
                        width: 36,
                        height: 36,
                        marginHorizontal: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowOffset: { width: 10, height: 10 },
                        shadowColor: 'black',
                        shadowOpacity: 1,
                        elevation: 3,
                    }}>
                    <Image
                        source={require('../assets/location.png')}
                        style={{
                            width: 14,
                            height: 14,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <RenderTop />
            <RenderMap />
            <RenderBottom />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    boxContainer: {
        marginHorizontal: 8,
        flexDirection: 'row',
    },
    wallet: {
        backgroundColor: '#fff',
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 12,
        marginRight: 5,
    },
    top: {
        height: '20%',
        width: '100%',
        backgroundColor: '#2F1FDA',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    bottom: {
        height: '20%',
        width: '100%',
        backgroundColor: '#FEFEFE',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '60%',
        backgroundColor: '#FFF',
    },
    walletContainer: {
        marginHorizontal: 8,
    },
    topText: {
        fontFamily: 'Intern',
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    price: {
        fontFamily: 'Intern',
        fontWeight: '300',
        fontSize: 20,
        color: '#00F545',
        marginBottom: 2,
    },
});

export default HomeScreen;

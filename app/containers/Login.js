import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const widthFigma = 375;
const heightFigma = 811;

const scale = (value) => {
    const newScale = (width / widthFigma) * value;
    return newScale;
};
const scaleHeight = (value) => {
    const newScale = (height / heightFigma) * value;
    return newScale;
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: scaleHeight(104)
                                }}>
                                <Image
                                    style={{
                                        width: scale(88),
                                        height: scaleHeight(98),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_lg_main' }}
                                />
                            </View>
                            <View
                                style={{
                                    marginTop: scaleHeight(68),
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: scale(28),
                                        fontWeight:
                                            Platform.OS === 'android'
                                                ? 'bold'
                                                : '900',
                                        fontStyle: 'italic',
                                        textAlign: 'center',
                                        color: 'rgba(44, 44, 44, 1)'
                                    }}>
                                    LOGIN NOW
                                </Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: 'center' }}>
                                <View
                                    style={{
                                        flex: 1,
                                        marginHorizontal: scale(16),
                                        borderWidth: 1,
                                        borderRadius: scale(16),
                                        borderColor: 'rgba(167, 155, 191, 1)',
                                        alignItems: 'center',
                                        paddingHorizontal: scale(16),
                                        flexDirection: 'row',

                                        shadowColor: 'rgba(0, 0, 0, 1)',
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                        overflow: 'hidden',
                                        marginTop: scaleHeight(32)
                                    }}>
                                    <Image
                                        style={{
                                            width: scale(24),
                                            height: scaleHeight(24),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_run' }}
                                    />
                                    <TextInput
                                        style={{
                                            paddingHorizontal: 8,
                                            fontWeight: 'bold',
                                            fontSize: scale(16)
                                        }}
                                        // onChangeText={onChangeNumber}
                                        // value={number}
                                        placeholder="User name"
                                        keyboardType="default"
                                    />
                                </View>

                                <View
                                    style={{
                                        flex: 1,
                                        marginHorizontal: scale(16),
                                        borderWidth: 1,
                                        borderRadius: scale(16),
                                        borderColor: 'rgba(167, 155, 191, 1)',
                                        alignItems: 'center',
                                        paddingHorizontal: scale(16),
                                        flexDirection: 'row',

                                        shadowColor: 'rgba(0, 0, 0, 1)',
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                        overflow: 'hidden',
                                        marginTop: scaleHeight(16)
                                    }}>
                                    <Image
                                        style={{
                                            width: scale(24),
                                            height: scaleHeight(24),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_lock' }}
                                    />
                                    <TextInput
                                        style={{
                                            paddingHorizontal: scale(8),
                                            fontWeight: 'bold',
                                            fontSize: scale(16)
                                        }}
                                        // onChangeText={onChangeNumber}
                                        // value={number}
                                        placeholder="Password"
                                        keyboardType="default"
                                    />
                                </View>
                            </View>

                            <View style={{ flex: 5, alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ marginTop: scaleHeight(24) }}>
                                    <Image
                                        style={{
                                            width: scale(221),
                                            height: scaleHeight(64),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_btn_login' }}
                                    />
                                </TouchableOpacity>

                                <View style={{ marginTop: scaleHeight(16) }}>
                                    <Text
                                        style={{
                                            fontSize: scale(14),
                                            fontWeight: '400',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'rgba(44, 44, 44, 1)'
                                        }}>
                                        Forgot password?
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={{ marginTop: scaleHeight(48) }}>
                                    <Image
                                        style={{
                                            width: scale(221),
                                            height: scaleHeight(64),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_btn_signup' }}
                                    />
                                </TouchableOpacity>

                                <View style={{ marginTop: scaleHeight(16) }}>
                                    <Text
                                        style={{
                                            fontSize: scale(14),
                                            fontWeight: '400',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'rgba(44, 44, 44, 1)',
                                            marginHorizontal: scale(35)
                                        }}>
                                        Make sure you agree to
                                        <Text
                                            style={{
                                                fontSize: scale(14),
                                                fontWeight: '700',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                color: 'rgba(44, 44, 44, 1)'
                                            }}>
                                            {` MOVEARN's `}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: scale(14),
                                                fontWeight: '400',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                color: '#F44369',
                                                textDecorationLine: 'underline'
                                            }}>
                                            {`User Agreement`}
                                        </Text>
                                        {' & '}
                                        <Text
                                            style={{
                                                fontSize: scale(14),
                                                fontWeight: '400',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                color: '#F44369',
                                                textDecorationLine: 'underline'
                                            }}>
                                            {`User Privacy`}
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

export default Login;

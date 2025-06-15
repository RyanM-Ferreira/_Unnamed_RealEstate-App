import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import StylesGlobal, { Colors } from '../stylesGlobal';

export default function Chat({ navigation }) {
    return (
        <ScrollView style={StylesGlobal.bodyContainer}>

            <View style={StylesGlobal.header}>
                <View style={StylesGlobal.leftheader}>
                    <Text style={StylesGlobal.headerTitle}>Conversas</Text>
                </View>
                <View style={StylesGlobal.rightheader}>
                    <Image
                        source={require('../assets/icons/normal/contactIcon.svg')}
                        style={StylesGlobal.icon}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatIn')}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarIcon} source={require('../assets/icons/alt/personIcon.svg')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>[Vendedor]</Text>
                    <Text style={styles.lastMessage}>Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image style={styles.chatBallonIcon} source={require('../assets/icons/normal/contactIcon.svg')} />
                    <Text style={styles.chatBallonText}>8</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatIn')}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarIcon} source={require('../assets/icons/alt/personIcon.svg')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>[Vendedor]</Text>
                    <Text style={styles.lastMessage}>Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image style={styles.chatBallonIcon} source={require('../assets/icons/normal/contactIcon.svg')} />
                    <Text style={styles.chatBallonText}>7</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatIn')}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarIcon} source={require('../assets/icons/alt/personIcon.svg')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>[Vendedor]</Text>
                    <Text style={styles.lastMessage}>Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image style={styles.chatBallonIcon} source={require('../assets/icons/normal/contactIcon.svg')} />
                    <Text style={styles.chatBallonText}>5</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatIn')}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarIcon} source={require('../assets/icons/alt/personIcon.svg')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>[Vendedor]</Text>
                    <Text style={styles.lastMessage}>Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image style={styles.chatBallonIcon} source={require('../assets/icons/normal/contactIcon.svg')} />
                    <Text style={styles.chatBallonText}>1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatIn')}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarIcon} source={require('../assets/icons/alt/personIcon.svg')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>[Vendedor]</Text>
                    <Text style={styles.lastMessage}>Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image style={styles.chatBallonIcon} source={require('../assets/icons/normal/contactIcon.svg')} />
                    <Text style={styles.chatBallonText}>12</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatIn')}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarIcon} source={require('../assets/icons/alt/personIcon.svg')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>[Vendedor]</Text>
                    <Text style={styles.lastMessage}>Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image style={styles.chatBallonIcon} source={require('../assets/icons/normal/contactIcon.svg')} />
                    <Text style={styles.chatBallonText}>2</Text>
                </View>
            </TouchableOpacity>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 16,
        width: '100%',
        height: 64,
    },
    avatar: {
        marginRight: 12,
        backgroundColor: Colors.primaryColor,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarIcon: {
        width: 35,
        height: 30,
        resizeMode: 'contain',
    },
    info: {
        flex: 1,
    },
    name: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 18,
    },
    lastMessage: {
        color: '#000',
        fontSize: 14,
    },
    chatBallon: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    chatBallonIcon: {
        width: 32,
        height: 32,
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'contain',
    },
    chatBallonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        zIndex: 2,
        paddingBottom: 6,
    },
});
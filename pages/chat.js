import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Chat() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <Image
                        source={require('../assets/icons/normal/menuIcon.svg')}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pelo o que está buscando?"
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Image
                        source={require('../assets/icons/normal/loupIcon.svg')}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.titleBox}>
                <Text style={styles.title}>Conversas</Text>
            </View>


            <TouchableOpacity style={styles.card}>
                <View style={styles.avatar}>
                    <Image
                        source={require('../assets/icons/alt/personIcon.svg')}
                        style={styles.avatarIcon}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}> [Vendedor] </Text>
                    <Text style={styles.lastMessage}> Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image
                        source={require('../assets/icons/normal/contactIcon.svg')}
                        style={styles.chatBallonIcon}
                    />
                    <Text style={styles.chatBallonText}>8</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <View style={styles.avatar}>
                    <Image
                        source={require('../assets/icons/alt/personIcon.svg')}
                        style={styles.avatarIcon}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}> [Vendedor] </Text>
                    <Text style={styles.lastMessage}> Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image
                        source={require('../assets/icons/normal/contactIcon.svg')}
                        style={styles.chatBallonIcon}
                    />
                    <Text style={styles.chatBallonText}>7</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <View style={styles.avatar}>
                    <Image
                        source={require('../assets/icons/alt/personIcon.svg')}
                        style={styles.avatarIcon}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}> [Vendedor] </Text>
                    <Text style={styles.lastMessage}> Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image
                        source={require('../assets/icons/normal/contactIcon.svg')}
                        style={styles.chatBallonIcon}
                    />
                    <Text style={styles.chatBallonText}>5</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <View style={styles.avatar}>
                    <Image
                        source={require('../assets/icons/alt/personIcon.svg')}
                        style={styles.avatarIcon}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}> [Vendedor] </Text>
                    <Text style={styles.lastMessage}> Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image
                        source={require('../assets/icons/normal/contactIcon.svg')}
                        style={styles.chatBallonIcon}
                    />
                    <Text style={styles.chatBallonText}>1</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.card}>
                <View style={styles.avatar}>
                    <Image
                        source={require('../assets/icons/alt/personIcon.svg')}
                        style={styles.avatarIcon}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}> [Vendedor] </Text>
                    <Text style={styles.lastMessage}> Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image
                        source={require('../assets/icons/normal/contactIcon.svg')}
                        style={styles.chatBallonIcon}
                    />
                    <Text style={styles.chatBallonText}>12</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.card}>
                <View style={styles.avatar}>
                    <Image
                        source={require('../assets/icons/alt/personIcon.svg')}
                        style={styles.avatarIcon}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}> [Vendedor] </Text>
                    <Text style={styles.lastMessage}> Lorem Ipsum?</Text>
                </View>
                <View style={styles.chatBallon}>
                    <Image
                        source={require('../assets/icons/normal/contactIcon.svg')}
                        style={styles.chatBallonIcon}
                    />
                    <Text style={styles.chatBallonText}>2</Text>
                </View>
            </TouchableOpacity>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBDB',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 10,
        marginBottom: 14,
        width: '100%',
        height: 56,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 2,
        elevation: 2,
    },
    menuButton: {
        padding: 6,
        marginRight: 4,
    },
    headerIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 14,
        fontSize: 17,
        marginHorizontal: 6,
        borderWidth: 1.5,
        borderColor: '#d1c4e9',
        height: 36,
    },
    searchButton: {
        padding: 6,
        marginLeft: 4,
    },
    titleBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 14,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 65,
    },
    title: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 24,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        height: 75,
    },
    avatar: {
        marginRight: 12,
        backgroundColor: '#7C37F4',
        borderRadius: 50,
        padding: 2,
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
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 20,
    },
    lastMessage: {
        color: '#000000',
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
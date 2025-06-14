import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function ChatIn() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftheader}>
                    <TouchableOpacity style={styles.backButton}>
                        <Image
                            source={require('../assets/icons/normal/leftArrow.svg')}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.rightheader}>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={styles.headerTitle}>[Vendedor]</Text>
                        <Text style={styles.headerSubtitle}>Informações de Perfil</Text>
                    </View>
                    <View style={styles.headerAvatar}>
                        <Image
                            source={require('../assets/icons/alt/personIcon.svg')}
                            style={styles.avatarIcon}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.chatArea}>
                <View style={styles.bubbleLeft}>
                    <Text style={styles.bubbleLeftText}>Lorem Ipsum?</Text>
                </View>

                <View style={styles.bubbleRight}>
                    <Text style={styles.bubbleRightText}>Lorem ipsum dolor sit amet.</Text>
                </View>

                <View style={styles.bubbleLeft}>
                    <Text style={styles.bubbleLeftText}>Curabitur rutrum, nunc a varius ultricies.</Text>
                </View>

                <View style={styles.bubbleRight}>
                    <Text style={styles.bubbleRightText}>Enim dolor aliquam eros.</Text>
                </View>

                <View style={styles.bubbleLeft}>
                    <Text style={styles.bubbleLeftText}>Eget blandit odio lacus at massa.</Text>
                </View>

                <View style={styles.bubbleRight}>
                    <Text style={styles.bubbleRightText}>Sed sit amet vestibulum erat.</Text>
                </View>

                <View style={styles.bubbleLeft}>
                    <Text style={styles.bubbleLeftText}>Sed a mattis est, a malesuada ante.</Text>
                </View>

                <View style={styles.bubbleRight}>
                    <Text style={styles.bubbleRightText}>Cras ut est justo.</Text>
                </View>

                <View style={styles.bubbleRight}>
                    <Text style={styles.bubbleRightText}>Maecenas dignissim tellus justo.</Text>
                </View>

                <View style={styles.bubbleLeft}>
                    <Text style={styles.bubbleLeftText}>Vitae luctus tortor pharetra vitae.</Text>
                </View>

                <View style={styles.bubbleLeft}>
                    <Text style={styles.bubbleLeftText}> Sed velit sapien, varius nec sem non.</Text>
                </View>
            </View>

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Mensagem..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.sendButton}>
                    <Image
                        source={require('../assets/icons/normal/sendIcon.svg')}
                        style={styles.sendIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        justifyContent: 'flex-end',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 8,
        padding: 8,
        marginBottom: 0,
        width: '95%',
    },
    leftheader: {
        width: '50%',
        alignItems: 'flex-start',
    },
    rightheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'flex-end',
    },
    backButton: {
        padding: 4,
        width: '50%',
    },
    backIcon: {
        width: 28,
        height: 28,
        tintColor: '#7C37F4',
        resizeMode: 'contain',
    },
    headerTitle: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6,
    },
    headerSubtitle: {
        color: '#222',
        fontSize: 10,
        fontWeight: 'bold',
    },
    headerAvatar: {
        marginLeft: 8,
        backgroundColor: '#7C37F4',
        borderRadius: 50,
        padding: 2,
        width: 47,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarIcon: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
    },
    chatArea: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    bubbleLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#7C37F4',
        borderRadius: 14,
        marginBottom: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        maxWidth: '75%',
    },
    bubbleLeftText: {
        color: '#fff',
        fontSize: 15,
    },
    bubbleRight: {
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 14,
        marginBottom: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        maxWidth: '75%',
    },
    bubbleRightText: {
        color: '#222',
        fontSize: 15,
        fontWeight: 'bold',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 4,
        backgroundColor: 'transparent',
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 12,
        fontSize: 16,
        height: 40,
        marginRight: 8,
    },
    sendButton: {
        backgroundColor: '#7C37F4',
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
        resizeMode: 'contain',
    },
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        margin: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 2,
        borderColor: '#7C37F4',
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 4,
    },
    menuIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        tintColor: '#7C37F4',
    },
});
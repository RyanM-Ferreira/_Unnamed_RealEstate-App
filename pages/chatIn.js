import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import StylesGlobal, { Colors } from '../stylesGlobal';

export default function ChatIn({ navigation }) {
    return (
        <View style={StylesGlobal.bodyContainer}>
            <View style={styles.header}>
                <View style={styles.leftheader}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
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

            <ScrollView style={styles.messagesArea}>
                <View style={styles.messageBox}>
                    <Text style={styles.messageText}>Olá, tudo bem?</Text>
                </View>
                <View style={[styles.messageBox, styles.messageBoxUser]}>
                    <Text style={[styles.messageText, styles.messageTextUser]}>Olá! Tudo sim, e você?</Text>
                </View>
                <View style={styles.messageBox}>
                    <Text style={styles.messageText}>Estou bem, obrigado. Como posso ajudar?</Text>
                </View>
            </ScrollView>

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.sendButton}>
                    <Image style={styles.sendIcon} source={require('../assets/icons/alt/sendIcon.svg')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
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
    name: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 18,
    },
    messagesArea: {
        flex: 1,
        marginBottom: 10,
    },
    messageBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 8,
        alignSelf: 'flex-start',
        maxWidth: '80%',
    },
    messageText: {
        color: '#222',
        fontSize: 15,
    },
    messageBoxUser: {
        backgroundColor: Colors.primaryColor,
        alignSelf: 'flex-end',
    },
    messageTextUser: {
        color: '#fff',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 8,
        marginBottom: 10,
    },
    input: {
        fontSize: 15,
        padding: 8,
        color: '#222',
        flex: 1,
    },
    sendButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        padding: 10,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 16,
        padding: 8,
        width: '100%',
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
        width: 64,
    },
    backIcon: {
        width: 28,
        height: 28,
        tintColor: Colors.primaryColor,
        resizeMode: 'contain',
    },
    headerTitle: {
        color: Colors.primaryColor,
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
        backgroundColor: Colors.primaryColor,
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
});
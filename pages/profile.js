import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Profile() {
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

            <ScrollView style={{ flex: 1 }}>
                {/* Card do usuário */}
                <View style={styles.userCard}>
                    <View style={styles.userCardLeft}>
                        <View style={styles.avatarBox}>
                            <Image
                                source={require('../assets/icons/alt/personIcon.svg')}
                                style={styles.avatarIcon}
                            />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Nome Sobrenome</Text>
                            <Text style={styles.userDesc}>[Description here]</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.userCardRight}>
                        <Image
                            source={require('../assets/icons/normal/logoutIcon.svg')}
                            style={styles.exitProfileIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.infoCard}>
                    <View style={styles.infoCardHeader}>
                        <Text style={styles.infoCardTitle}>Informações Pessoais:</Text>
                        <TouchableOpacity style={styles.editBtn}>
                            <Text style={styles.editBtnText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.infoLine}>
                        <Text style={styles.infoLabel}>E-mail: </Text>
                        email@dominio.com
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.infoLabel}>Phone: </Text>
                        (11) 9xxxx-xxxx
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.infoLabel}>Data de nascimento: </Text>
                        01/01/2000
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.infoLabel}>Idioma: </Text>
                        Português(Brasil)
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <View style={styles.infoCardHeader}>
                        <Text style={styles.infoCardTitle}>Privacidade:</Text>
                        <TouchableOpacity style={styles.editBtn}>
                            <Text style={styles.editBtnText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.infoLine}>
                        <Text style={styles.infoLabel}>Senha: </Text>
                        ********
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.infoLabel}>Estado/Região: </Text>
                        São Paulo
                    </Text>
                    <Text style={styles.infoLine}>
                        <Text style={styles.infoLabel}>E-mail de recuperação: </Text>
                        Email.backup@dominio.com
                    </Text>
                </View>
            </ScrollView>
        </View>
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
    userCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userCardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
    },
    avatarBox: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#7C37F4',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    avatarIcon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
    userInfo: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    userName: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 18,
    },
    userDesc: {
        color: '#222',
        fontSize: 13,
    },
    userCardRight: {
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '20%',
        height: '100%',
        marginLeft: 12,
        marginBottom: 25,
        
    },
    exitProfileIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: '#7C37F4',
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        padding: 16,
    },
    infoCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        justifyContent: 'space-between',
    },
    infoCardTitle: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 17,
    },
    editBtn: {
        backgroundColor: '#7C37F4',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    editBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
    infoLine: {
        fontSize: 14,
        marginBottom: 4,
        color: '#222',
    },
    infoLabel: {
        color: '#7C37F4',
        fontWeight: 'bold',
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
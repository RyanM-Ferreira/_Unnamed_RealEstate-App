import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import StylesGlobal from '../stylesGlobal';
import { Colors } from '../stylesGlobal';

export default function Profile({ navigation }) {
    return (
        <View style={StylesGlobal.bodyContainer}>
            <View style={StylesGlobal.header}>
                <View style={StylesGlobal.leftheader}>
                    <TouchableOpacity style={StylesGlobal.backButton} onPress={() => navigation.replace('MainTabs')} >
                        <Image source={require('../assets/icons/normal/leftArrow.svg')} style={StylesGlobal.backIcon} />
                    </TouchableOpacity>
                </View>
                <View style={StylesGlobal.rightheader}>
                    <Text style={StylesGlobal.headerTitle}>Perfil</Text>
                </View>
            </View>

            <ScrollView>
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
    userCard: {
        borderRadius: 12,
        marginBottom: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
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
        backgroundColor: Colors.primaryColor,
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
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 18,
    },
    userDesc: {
        fontSize: 12,
    },
    userCardRight: {
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: 12,
        marginBottom: 25,
    },
    exitProfileIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: Colors.primaryColor,
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
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
    editBtn: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    editBtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    infoLine: {
        fontSize: 14,
        marginBottom: 4,
    },
    infoLabel: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
    },
});
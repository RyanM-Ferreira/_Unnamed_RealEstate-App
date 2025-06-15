import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

import StylesGlobal from '../stylesGlobal';
import { Colors } from '../stylesGlobal';

export default function SettingsScreen() {
    const [notifications, setnotifications] = useState(true);
    const [darkMode, setdarkMode] = useState(false);

    return (
        <View style={StylesGlobal.bodyContainer}>

            <View style={StylesGlobal.navBar}>
                <TouchableOpacity>
                    <Image style={StylesGlobal.icon} source={require('../assets/icons/normal/menuIcon.svg')} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Pelo o que está buscando?"
                    style={StylesGlobal.navInput}
                />
                <TouchableOpacity>
                    <Image style={StylesGlobal.icon} source={require('../assets/icons/normal/loupIcon.svg')} />
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Cadastrado em nome de:</Text>
            <View style={styles.contentSection}>
                <Text style={styles.email}>email@dominio.com</Text>
                <TouchableOpacity
                    style={styles.logoutButton} > Sair
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Preferências:</Text>
            <View style={styles.contentSection}>
                <Text style={styles.switchLabel}>Notificações</Text>
                <Switch
                    value={notifications}
                    onValueChange={setnotifications}
                    trackColor={{ false: Colors.bgColor, true: Colors.primaryColor }}
                />
            </View>

            <View style={styles.contentSection}>
                <Text style={styles.switchLabel}>Modo escuro</Text>
                <Switch
                    value={darkMode}
                    onValueChange={setdarkMode}
                    trackColor={{ false: Colors.bgColor, true: Colors.primaryColor }}
                />
            </View>

            <Text style={styles.sectionTitle}>Privacidade</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => { }}>
                <Text style={styles.deleteButtonText}>Excluir conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primaryColor,
    },
    accountSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'space-between',
        marginTop: 5
    },
    email: {
    },
    logoutButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 8,
        padding: 8,
        height: 24,
        width: 48,
        fontSize: 12,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginTop: 10
    },
    switchLabel: {
        color: '#333',
        fontSize: 15
    },
    deleteButton: {
        backgroundColor: Colors.alertColor,
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center'
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
});
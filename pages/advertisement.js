import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import StylesGlobal, { Colors } from '../stylesGlobal';

export default function Advertisement({ navigation }) {
    return (
        <ScrollView style={StylesGlobal.bodyContainer}>
            <View style={StylesGlobal.header}>
                <View style={StylesGlobal.leftheader}>
                    <TouchableOpacity style={StylesGlobal.backButton} onPress={() => navigation.goBack()} >
                        <Image source={require('../assets/icons/normal/leftArrow.svg')} style={StylesGlobal.backIcon} />
                    </TouchableOpacity>
                </View>
                <View style={StylesGlobal.rightheader}>
                    <Text style={StylesGlobal.headerTitle}>Voltar</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Detalhes do Anúncio</Text>
                <View style={styles.sellerRow}>
                    <View style={styles.sellerIcon}>
                        <Image style={styles.sellerIconImg} source={require('../assets/icons/alt/personIcon.svg')} />
                    </View>
                    <Text style={styles.sellerText}>[Vendedor]</Text>
                </View>
                <View style={styles.imagesRow}>
                    <View style={styles.mainImage} />
                    <View style={styles.sideImages}>
                        <View style={styles.sideImage} />
                        <View style={styles.sideImage} />
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View>
                        <Text style={styles.availableText}>Disponível para COMPRA em:</Text>
                        <Text style={styles.price}>R$ 350.000</Text>
                    </View>
                    <View>
                        <Text style={styles.infoLabel}>Área: <Text style={styles.infoValue}>500m²</Text></Text>
                        <Text style={styles.infoLabel}>Banheiros: <Text style={styles.infoValue}>02</Text></Text>
                        <Text style={styles.infoLabel}>Qnt. Cômodos: <Text style={styles.infoValue}>05</Text></Text>
                        <Text style={styles.infoLabel}>Garagem: <Text style={styles.infoValue}>01</Text></Text>
                    </View>
                </View>
                <View style={styles.detailsRow}>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Image style={styles.detailsIcon} source={require('../assets/icons/alt/infoIcon.svg')} />
                        <Text style={styles.detailsButtonText}>Detalhes</Text>
                    </TouchableOpacity>
                    <View style={styles.iconActions}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image style={styles.actionIcon} source={require('../assets/icons/alt/notificationIcon.svg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image style={styles.actionIcon} source={require('../assets/icons/alt/savedIcon.svg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image style={styles.actionIcon} source={require('../assets/icons/alt/rightArrow.svg')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <View style={[styles.box, styles.location]}>
                    <Text style={styles.boxTitle}>Localização:</Text>
                    <Text style={styles.locationText}>Portal do Éden, Itu.</Text>
                </View>
                <TouchableOpacity style={[styles.box, styles.otherPosts]}>
                    <Text style={styles.otherPostsText}>Outras postagens do Vendedor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.box}>
                <Text style={styles.boxTitle}>Precisa financiar?</Text>
                <TouchableOpacity style={styles.financeButton}>
                    <Text style={styles.financeButtonText}>Simular Financiamento</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.contactButton}>
                <Image style={styles.contactIcon} source={require('../assets/icons/alt/contactIcon.svg')} />
                <Text style={styles.contactButtonText}>Contatar vendedor</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 14,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.primaryColor,
        marginBottom: 2,
    },
    sellerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 8,
    },
    sellerIcon: {
        width: 35,
        height: 35,
        borderRadius: 6,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    sellerIconImg: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    sellerText: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
    imagesRow: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    mainImage: {
        backgroundColor: Colors.dImgColor,
        width: '60%',
        height: 120,
        borderRadius: 12,
        marginRight: 5,
    },
    sideImages: {
        justifyContent: 'space-between',
        width: '36%',
    },
    sideImage: {
        backgroundColor: Colors.dImgColor,
        height: 56,
        width: '100%',
        borderRadius: 12,
    },
    infoBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        color: Colors.primaryColor,
        marginBottom: 4,
    },
    infoLabel: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 12,
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    detailsButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    detailsIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginRight: 4,
    },
    detailsButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        padding: 10,
        marginLeft: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        justifyContent: 'center',
    },
    boxTitle: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    locationText: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 14,
    },
    location: {
        width: '48%',
        alignItems: 'center',
        marginRight: 8,
        height: 64,
    },
    otherPosts: {
        width: '48%',
        height: 64,
        borderWidth: 4,
        backgroundColor: 'transparent',
        borderColor: Colors.primaryColor,
        alignItems: 'center',
    },
    otherPostsText: {
        color: Colors.primaryColor,
        fontWeight: 'bolder',
        textAlign: 'center',
        fontSize: 13,
    },
    financeButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    financeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    contactButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginVertical: 16,
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contactIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 10,
    },
    contactButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Saved({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Barra de busca */}
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
                <Text style={styles.title}>Postagens Salvas</Text>
                <Image
                    source={require('../assets/icons/normal/savedIcon.svg')}
                    style={styles.titleIcon}
                />
            </View>

            <ScrollView style={{ flex: 1 }}>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardLeftHeader}>
                            <View style={styles.sellerIcon}>
                                <Image
                                    source={require('../assets/icons/alt/personIcon.svg')}
                                    style={styles.sellerIconImg}
                                />
                            </View>
                            <Text style={styles.sellerText}>[Vendedor]</Text>
                        </View>


                        <TouchableOpacity style={styles.cardRightHeader}>
                            <Image
                                source={require('../assets/icons/normal/dotsIcon.svg')}
                                style={styles.dotsIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardBody}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.price}>R$ 350.000</Text>
                            <Text style={styles.label}>Disponível para COMPRA em:</Text>
                            <Text style={styles.location}>Portal do Éden, Itu.</Text>
                        </View>
                        <View style={styles.infoDetails}>
                            <Text style={styles.infoText}>Área: <Text style={styles.infoBold}>500m²</Text></Text>
                            <Text style={styles.infoText}>Qnt. Cômodos: <Text style={styles.infoBold}>05</Text></Text>
                            <Text style={styles.infoText}>Banheiros: <Text style={styles.infoBold}>02</Text></Text>
                            <Text style={styles.infoText}>Garagem: <Text style={styles.infoBold}>01</Text></Text>
                        </View>
                        <View style={styles.infoBox}></View>
                    </View>

                    <View style={styles.cardFooter}>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Image
                                source={require('../assets/icons/normal/savedIcon.svg')}
                                style={styles.footerIcon}
                            />
                            <Text style={styles.removeBtnText}>Remover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Image
                                source={require('../assets/icons/normal/contactIcon.svg')}
                                style={styles.footerIcon}
                            />
                            <Text style={styles.contactBtnText}>Entrar em contato</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notifyBtn}>
                            <Image
                                source={require('../assets/icons/normal/notificationIcon.svg')}
                                style={styles.notifyIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardLeftHeader}>
                            <View style={styles.sellerIcon}>
                                <Image
                                    source={require('../assets/icons/alt/personIcon.svg')}
                                    style={styles.sellerIconImg}
                                />
                            </View>
                            <Text style={styles.sellerText}>[Vendedor]</Text>
                        </View>


                        <TouchableOpacity style={styles.cardRightHeader}>
                            <Image
                                source={require('../assets/icons/normal/dotsIcon.svg')}
                                style={styles.dotsIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardBody}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.price}>R$ 200.000</Text>
                            <Text style={styles.label}>Disponível para COMPRA em:</Text>
                            <Text style={styles.location}>Centro, Cabreúva.</Text>
                        </View>
                        <View style={styles.infoDetails}>
                            <Text style={styles.infoText}>Área: <Text style={styles.infoBold}>250m²</Text></Text>
                            <Text style={styles.infoText}>Qnt. Cômodos: <Text style={styles.infoBold}>02</Text></Text>
                            <Text style={styles.infoText}>Banheiros: <Text style={styles.infoBold}>01</Text></Text>
                            <Text style={styles.infoText}>Garagem: <Text style={styles.infoBold}>01</Text></Text>
                        </View>
                        <View style={styles.infoBox}></View>
                    </View>

                    <View style={styles.cardFooter}>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Image
                                source={require('../assets/icons/normal/savedIcon.svg')}
                                style={styles.footerIcon}
                            />
                            <Text style={styles.removeBtnText}>Remover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Image
                                source={require('../assets/icons/normal/contactIcon.svg')}
                                style={styles.footerIcon}
                            />
                            <Text style={styles.contactBtnText}>Entrar em contato</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notifyBtn}>
                            <Image
                                source={require('../assets/icons/normal/notificationIcon.svg')}
                                style={styles.notifyIcon}
                            />
                        </TouchableOpacity>
                    </View>
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
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 8,
        marginBottom: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        height: 70,
    },
    title: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 20,
    },
    titleIcon: {
        width: 24,
        height: 24,
        tintColor: '#7C37F4',
        resizeMode: 'contain',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 8,
        marginBottom: 12,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
        padding: 8,
        width: '100%',

    },
    cardLeftHeader: {
        width: '50%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    cardRightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        justifyContent: 'flex-end',
    },
    sellerIcon: {
        width: 35,
        height: 35,
        borderRadius: 6,
        backgroundColor: '#7C37F4',
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
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 16,
    },
    dotsIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: '#7C37F4',

    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    price: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 2,
    },
    label: {
        color: '#222',
        fontSize: 11,
    },
    location: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 2,
        justifyContent: 'flex-start',
    },
    infoDetails: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    infoBox: {
        backgroundColor: '#e3d6fa',
        borderRadius: 8,
        padding: 8,
        marginLeft: 10,
        width: 110,
        height: 60,
    },
    infoText: {
        color: '#7C37F4',
        fontSize: 11,
    },
    infoBold: {
        fontWeight: 'bold',
        color: '#222',
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        gap: 8,
    },
    iconBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7C37F4',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 6,
        width: 'auto',
        height: 39,
    },
    removeBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 4,
    },
    contactBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 4,
    },
    notifyBtn: {
        backgroundColor: '#7C37F4',
        borderRadius: 8,
        padding: 6,
        marginLeft: 'auto',
        width: 39,
        height: 39,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footerIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    notifyIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: '#fff',
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
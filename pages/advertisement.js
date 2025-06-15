import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Advertisement() {
    return (
        <View style={styles.screen}>
           
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

            {/* Card */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Detalhes do Anúncio</Text>
                <View style={styles.sellerRow}>
                    <View style={styles.sellerIcon}>
                        <Image
                            source={require('../assets/icons/alt/personIcon.svg')}
                            style={styles.sellerIconImg}
                        />
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
                    <View style={styles.infoLeft}>
                        <Text style={styles.availableText}>Disponível para COMPRA em:</Text>
                        <Text style={styles.price}>R$ 350.000</Text>
                    </View>
                    <View style={styles.infoRight}>
                        <View style={styles.infoRightTop}>
                            <Text style={styles.infoLabel}>Área: </Text>
                            <Text style={styles.infoLabelValue}>500m²  </Text>
                            <Text style={styles.infoLabel}>Banheiros: </Text>
                            <Text style={styles.infoLabelValue}>02</Text>
                        </View>
                        <View style={styles.infoRightBottom}>
                            <Text style={styles.infoLabel}>Qnt. Cômodos: </Text>
                            <Text style={styles.infoLabelValue}>05  </Text>
                            <Text style={styles.infoLabel}>Garagem: </Text>
                            <Text style={styles.infoLabelValue}>01</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.details}>
                    <TouchableOpacity style={styles.detailsButton}>
                        <View style={styles.detailsContent}>
                            <Image
                                source={require('../assets/icons/alt/infoIcon.svg')}
                                style={styles.detailsIcon}
                            />
                            <Text style={styles.detailsButtonText}>Visualizar detalhes</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.iconActions}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/icons/alt/notificationIcon.svg')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/icons/alt/savedIcon.svg')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/icons/alt/rightArrow.svg')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.otherDetailsBox}>
                <View style={styles.locationBox}>
                    <Text style={styles.boxTitle}>Localização:</Text>
                    <Text style={styles.locationText}>Portal do Éden, Itu.</Text>
                </View>
                <TouchableOpacity style={styles.otherPosts}>
                    <Text style={styles.otherPostsText}>Outras postagens do Vendedor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.financeBox}>
                <Text style={styles.boxTitle}>Precisa financiar?</Text>
                <TouchableOpacity style={styles.financeButton}>
                    <Text style={styles.financeButtonText}>Simular Financiamento</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.contactButton}>
                <Image
                    source={require('../assets/icons/alt/contactIcon.svg')}
                    style={styles.contactIcon}
                />
                <Text style={styles.contactButtonText}>Contatar vendedor</Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#DBDBDB',
        padding: 10,
        width: '100%',
        minHeight: 915,
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 14,
        marginBottom: 14,
        elevation: 2,
        width: '100%',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#7C37F4',
        marginBottom: 2,
    },
    sellerRow: {
        flexDirection: 'row',
        alignItems: 'top',
        marginBottom: 12,
        marginTop: 8,
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
    imagesRow: {
        flexDirection: 'row',
        marginBottom: 15,
        width: '100%',
        justifyContent: 'flex-start',
    },
    mainImage: {
        backgroundColor: '#D9C3FF',
        width: '60%',
        height: 169,
        borderRadius: 12,
        marginRight: 5,
    },
    sideImages: {
        justifyContent: 'space-between',
        width: '36%',
    },
    sideImage: {
        backgroundColor: '#D9C3FF',
        width: '100%',
        height: 82,
        borderRadius: 12,
        marginBottom: 5,
    },
    infoBlock: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%',

    },
    infoLeft: {
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    infoRight: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    availableText: {
        fontSize: 10,
        color: '#222',
        flex: 1,
    },  
    price: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#7C37F4',
        marginBottom: 4,
    },

    infoRightTop: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        gap: 2,
    },
    infoRightBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        gap: 2,
    },
    infoLabel: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 12,
    },
    infoLabelValue: {
        color: '#000',
        fontWeight: 'regular',
        fontSize: 12,
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
        width: '100%',
    },
    detailsButton: {
        backgroundColor: '#7C37F4',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
    },
    detailsContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginRight: 4,
    },
    detailsButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    iconActions: {
        marginLeft: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    iconButton: {
        backgroundColor: '#7C37F4',
        borderRadius: 10,
        padding: 10,
        marginLeft: 0,
        marginRight: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    otherDetailsBox: {
        flexDirection: 'row',
        marginBottom: 14,
        width: '100%',
    },
    locationBox: {
        flex: 1.2,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginRight: 8,
        justifyContent: 'center',
    },
    boxTitle: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 12,
    },
    locationText: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 2,
    },
    otherPosts: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderWidth: 4,
        borderColor: '#7C37F4',
    },
    otherPostsText: {
        color: '#7C37F4',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    financeBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 14,
        width: '100%',
    },
    financeButton: {
        backgroundColor: '#7C37F4',
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 10,
        alignItems: 'center',
    },
    financeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    contactButton: {
        backgroundColor: '#7C37F4',
        borderRadius: 14,
        paddingVertical: 18,
        paddingHorizontal: 18,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contactIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 8,
    },
    contactButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 80,
    },
});
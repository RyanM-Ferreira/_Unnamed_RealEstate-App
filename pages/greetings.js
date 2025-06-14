import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Greetings() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <View style={styles.iconContainer}>
                <Image
                    source={require('../assets/images/greetings.svg')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.exploreText}>Comece a explorar!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Explorar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 16,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#7C37F4',
        marginTop: 32,
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 24,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
    icon: {
        width: 140,
        height: 140,
    },
    exploreText: {
        color: '#7C37F4',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 32,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#7C37F4',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 64,
        marginBottom: 24,
        alignSelf: 'stretch',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});
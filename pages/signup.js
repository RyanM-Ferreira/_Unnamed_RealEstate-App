import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

/* Apparently, React Native doesn't have Linear Gradient like CSS, so it's necessary to
import an additional component*/
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../stylesGlobal';
import StylesGlobal from '../stylesGlobal';

export default function SignUp({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return (
        <LinearGradient
            colors={[Colors.primaryColor, Colors.gradientColor]}
            style={StylesGlobal.gradientBodyContainer}>
            <ScrollView contentContainerStyle={StylesLogin.container} showsVerticalScrollIndicator={false}>
                <Text style={StylesLogin.title}>Criar</Text>

                <Text style={StylesLogin.label}>Nome:</Text>
                <TextInput
                    style={StylesLogin.input}
                    placeholder="Nome Sobrenome"
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={StylesLogin.label}>E-mail:</Text>
                <TextInput
                    style={StylesLogin.input}
                    placeholder="email@dominio.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={StylesLogin.label}>Telefone:</Text>
                <TextInput
                    style={StylesLogin.input}
                    placeholder="(xx) 9xxxx-xxxx"
                    value={telefone}
                    onChangeText={setTelefone}
                    keyboardType="phone-pad"
                />

                <Text style={StylesLogin.label}>Data de nascimento:</Text>
                <TextInput
                    style={StylesLogin.input}
                    placeholder="01/01/2001"
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                />

                <Text style={StylesLogin.label}>CPF/CNPJ:</Text>
                <TextInput
                    style={StylesLogin.input}
                    placeholder="..."
                    value={cpf}
                    onChangeText={setCpf}
                    keyboardType="numeric"
                />

                <Text style={StylesLogin.label}>Senha:</Text>
                <TextInput
                    style={StylesLogin.input}
                    placeholder="******"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <Text style={StylesLogin.label}>Confirmar senha:</Text>
                <TextInput
                    style={StylesLogin.input}
                    placeholder="******"
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry
                />

                <TouchableOpacity>
                    <Text style={StylesLogin.loginLink} onPress={() => navigation.goBack()}>Já possui uma conta? Entre aqui!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StylesLogin.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={StylesLogin.buttonText} >Criar</Text>
                </TouchableOpacity>
            </ScrollView >
        </LinearGradient >
    );
}


const StylesLogin = StyleSheet.create({
    title: {
        fontSize: 28,
        color: Colors.primaryColor,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        justifyContent: 'center',
        marginVertical: 'auto',
    },
    label: {
        marginBottom: 5,
        marginTop: 10,
        fontSize: 15
    },
    input: {
        borderWidth: 2,
        borderColor: Colors.primaryColor,
        borderRadius: 8,
        padding: 10,
        color: 'black',
    },
    loginLink: {
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        backgroundColor: Colors.primaryColor,
        padding: 15,
        borderRadius: 10,
        marginVertical: 8
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

/* Apparently, React Native doesn't have Linear Gradient like CSS, so it's necessary to
import an additional component*/
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../stylesGlobal';
import StylesGlobal from '../stylesGlobal';

import { StylesLogin } from "./login";

export default function SignUp() {
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
            style={StylesLoginGlobal.gradientBodyContainer}>
            <ScrollView style={StylesLogin.container} showsHorizontalScrollIndicator={false}>
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

                <TouchableOpacity onPress={() => { }}>
                    <Text style={StylesLogin.loginLink}>Já possui uma conta? Entre aqui!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StylesLogin.button} onPress={() => { }}>
                    <Text style={StylesLogin.buttonText}>Criar</Text>
                </TouchableOpacity>
            </ScrollView >
        </LinearGradient >
    );
}
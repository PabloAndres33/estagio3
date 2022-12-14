import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, TextInput,TouchableOpacity,Image, Text, View, Button} from 'react-native';
import {css} from '../assets/css/Css';


export default function Login({navigation}) {

    const [display, setDisplay]=useState('none');
    const [user, setUser]=useState('null');
    const [password, setPassword]=useState('null');
    const [login, setLogin]=useState('null');

    async function sendForm(){
        let response = await fetch('http://192.168.67.78:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user,
                password: password
            })
        });

        let json = await response.json();
        console.log(json);
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            }, 5000);

        }else{
            navigation.navigate('Principal');
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
              <Image source={require('../assets/techlogo.png')}></Image>
            </View>

            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário' onChangeText={text=>setUser(text)}></TextInput>
                <TextInput style={css.login__input} placeholder='Senha' onChangeText={text=>setPassword(text)} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
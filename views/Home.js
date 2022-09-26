import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Home(props) {
    console.log(props);
    return (
        <View>
            <Text>Componente Home do sistema!</Text>
            <Button title='Ir para Login' onPress={()=>props.navigation.navigate('Login')}></Button>
            <Text>

            </Text>
            <Button title='Ir para Cadastro' onPress={()=>props.navigation.navigate('Cadastro')}></Button>
        </View>
    );
}